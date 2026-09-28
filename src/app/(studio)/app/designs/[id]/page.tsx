import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { DesignView, type RenderJson } from "@/components/app/DesignView";
import { requireUser } from "@/lib/server/auth";
import { getRender, serializeRender } from "@/lib/server/renders";

export default async function DesignPage({ params }: PageProps<"/app/designs/[id]">) {
  const { id } = await params;
  const user = await requireUser(`/app/designs/${id}`);
  const row = getRender(id, user.id);
  if (!row) notFound();
  const initial = serializeRender(row, (rid, file) => `/media/${rid}/${file}`) as RenderJson;
  return (
    <div>
      <Link href="/app" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
        <ArrowLeft className="size-4" /> My designs
      </Link>
      <DesignView key={initial.id} initial={initial} />
    </div>
  );
}
