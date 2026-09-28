import {
  Briefcase, Brush, Building2, Camera, ChartColumn, Clock, Code2, Cpu, Download, Droplet, Eraser, Eye, Globe,
  Hammer, Heart, House, Image as ImageIcon, KeyRound, Lamp, LayoutGrid, Layers, Leaf, Lightbulb, Lock, Megaphone,
  MessageSquare, Move, Palette, Pencil, Ruler, ScanLine, Search, Shield, Sofa, Sparkles, Sun, Trees, Users,
  WandSparkles, Zap, type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

const MAP: Record<IconName, LucideIcon> = {
  sparkles: Sparkles, wand: WandSparkles, palette: Palette, sofa: Sofa, home: House, trees: Trees, ruler: Ruler,
  layers: Layers, camera: Camera, clock: Clock, shield: Shield, download: Download, brush: Brush, lamp: Lamp,
  sun: Sun, image: ImageIcon, pencil: Pencil, scan: ScanLine, users: Users, briefcase: Briefcase, building: Building2,
  hammer: Hammer, key: KeyRound, megaphone: Megaphone, chart: ChartColumn, code: Code2, lightbulb: Lightbulb,
  leaf: Leaf, droplet: Droplet, grid: LayoutGrid, eye: Eye, heart: Heart, zap: Zap, globe: Globe, lock: Lock,
  message: MessageSquare, search: Search, move: Move, eraser: Eraser, cpu: Cpu,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className ?? "size-5"} strokeWidth={1.75} aria-hidden />;
}
