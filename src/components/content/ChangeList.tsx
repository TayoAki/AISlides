import { cn } from "@/lib/cn";

const TONE = { New: "bg-brand-soft text-brand-strong", Improved: "bg-gold/15 text-gold", Fixed: "bg-accent-soft text-accent-strong" };

export function ChangeList({ items }: { items: { tag: "New" | "Improved" | "Fixed"; text: string }[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={cn("mt-0.5 w-20 shrink-0 rounded-full px-2 py-0.5 text-center text-xs font-semibold", TONE[item.tag])}>{item.tag}</span>
          <span className="text-ink-2">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
