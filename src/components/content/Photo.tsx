import Image from "next/image";
import { IMAGES } from "@/content/images";
import type { ImageKey } from "@/content/types";
import { cn } from "@/lib/cn";

export function Photo({
  image,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  eager = false,
  alt,
  fill = false,
}: {
  image: ImageKey;
  className?: string;
  sizes?: string;
  eager?: boolean;
  alt?: string;
  fill?: boolean;
}) {
  const asset = IMAGES[image];
  const text = alt ?? asset.alt;
  const common = {
    src: asset.src,
    sizes,
    loading: eager ? ("eager" as const) : ("lazy" as const),
    fetchPriority: eager ? ("high" as const) : undefined,
  };
  if (fill) return <Image {...common} alt={text} fill className={cn("object-cover", className)} />;
  return <Image {...common} alt={text} width={asset.width} height={asset.height} className={cn("h-auto w-full object-cover", className)} />;
}

export function photoCredit(image: ImageKey) {
  return IMAGES[image].credit;
}
