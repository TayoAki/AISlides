#!/usr/bin/env bash
# Exports every Flute promo scene and joins them into promo/roomwright-promo.mp4.
# Needs the dev server running (npm run dev), FFmpeg and Playwright's Chromium.
#   npm run promo                      # export all scenes, then assemble
#   SKIP_EXPORT=1 npm run promo        # only re-assemble existing clips
#   APP_URL=http://127.0.0.1:3001 npm run promo
set -euo pipefail
cd "$(dirname "$0")/.."

APP_URL="${APP_URL:-http://127.0.0.1:3000}"
ORDER=(hero-survey studio-panel tools-plating pricing-survey cta-endcard)
FADE=0.8
mkdir -p promo

if [ -z "${SKIP_EXPORT:-}" ]; then
  for id in "${ORDER[@]}"; do
    echo "Exporting $id..."
    rm -f "promo/$id.mp4"
    npx flute export --url "$APP_URL/flute?flute-preview=1&flute-scene=$id" \
      --output "promo/$id.mp4" --fps 30 --width 1920 --height 1080
  done
fi

inputs=()
filter=""
prev="[0:v]"
total=0
for i in "${!ORDER[@]}"; do
  clip="promo/${ORDER[$i]}.mp4"
  [ -f "$clip" ] || { echo "Missing $clip; run without SKIP_EXPORT first." >&2; exit 1; }
  inputs+=(-i "$clip")
  length=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$clip")
  if [ "$i" -eq 0 ]; then
    total=$length
    continue
  fi
  offset=$(awk -v t="$total" -v f="$FADE" 'BEGIN { printf "%.3f", t - f }')
  filter+="${prev}[$i:v]xfade=transition=fadeblack:duration=$FADE:offset=$offset[v$i];"
  prev="[v$i]"
  total=$(awk -v t="$total" -v l="$length" -v f="$FADE" 'BEGIN { printf "%.3f", t + l - f }')
done

ffmpeg -v error -y "${inputs[@]}" -filter_complex "${filter}${prev}format=yuv420p[out]" -map "[out]" \
  -c:v libx264 -preset slow -crf 18 -r 30 -movflags +faststart promo/roomwright-promo.mp4
echo "Wrote promo/roomwright-promo.mp4 (${total}s)"
