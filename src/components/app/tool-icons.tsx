import { Armchair, CloudSun, Eraser, Lamp, Layers, Palette, PaintRoller, Pencil, ScanLine, Sofa, Sparkles, WandSparkles, type LucideIcon } from "lucide-react";
import type { ToolId } from "@/lib/tools";

export const TOOL_ICONS: Record<ToolId, LucideIcon> = {
  redesign: WandSparkles,
  "virtual-staging": Sofa,
  "decor-staging": Lamp,
  declutter: Eraser,
  paint: PaintRoller,
  materials: Layers,
  sky: CloudSun,
  sketch: Pencil,
  edit: ScanLine,
  "style-transfer": Palette,
  "text-to-design": Sparkles,
  "furniture-creator": Armchair,
};

export const TOOL_PLACEHOLDERS: Record<ToolId, string> = {
  redesign: "Optional: warm oak floors, a curved sofa, keep the fireplace",
  "virtual-staging": "Optional: a family-friendly layout with a sectional",
  "decor-staging": "Optional: add plants and a large abstract canvas",
  declutter: "Optional: keep the dining table",
  paint: "Optional: satin finish on the trim",
  materials: "Optional: wide planks laid lengthwise",
  sky: "Optional: soft clouds, warm light on the facade",
  sketch: "Optional: floor-to-ceiling windows, concrete floor",
  edit: "Replace the sofa with a green velvet one and add a floor lamp beside it",
  "style-transfer": "Optional: keep my existing sofa",
  "text-to-design": "A sunlit Japandi living room with a low oak coffee table, linen sofa and paper lantern",
  "furniture-creator": "A low lounge chair with a curved walnut frame and oatmeal bouclé cushions",
};
