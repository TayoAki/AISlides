import { notFound } from "next/navigation";
import { isAdmin, requireUser } from "@/lib/server/auth";
import { getDb } from "@/lib/server/db";

type Lead = { id: string; kind: string; name: string | null; email: string; company: string | null; website: string | null; message: string | null; created_at: number };

export default async function AdminPage() {
  const user = await requireUser("/app/admin");
  if (!isAdmin(user)) notFound();
  const db = getDb();
  const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC LIMIT 200").all() as Lead[];
  const stats = db
    .prepare(
      `SELECT (SELECT COUNT(*) FROM users) AS users,
              (SELECT COUNT(*) FROM renders) AS renders,
              (SELECT COUNT(*) FROM renders WHERE status = 'failed') AS failed,
              (SELECT COUNT(*) FROM leads) AS leads`,
    )
    .get() as { users: number; renders: number; failed: number; leads: number };
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-ink">Admin</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Object.entries(stats).map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-line bg-surface p-4">
            <p className="text-xs uppercase tracking-wider text-muted">{k}</p>
            <p className="font-display text-3xl text-ink">{v}</p>
          </div>
        ))}
      </div>
      <section>
        <h2 className="text-xl text-ink">Form submissions</h2>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line text-xs uppercase tracking-wider text-muted">
              <tr>
                {["When", "Form", "Name", "Email", "Company", "Website", "Message"].map((h) => (
                  <th key={h} className="px-3 py-2 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {leads.map((l) => (
                <tr key={l.id} className="align-top">
                  <td className="whitespace-nowrap px-3 py-2 text-muted">{new Date(l.created_at).toISOString().slice(0, 16).replace("T", " ")}</td>
                  <td className="px-3 py-2">{l.kind}</td>
                  <td className="px-3 py-2">{l.name}</td>
                  <td className="px-3 py-2">{l.email}</td>
                  <td className="px-3 py-2">{l.company}</td>
                  <td className="max-w-40 truncate px-3 py-2">{l.website}</td>
                  <td className="max-w-md whitespace-pre-wrap px-3 py-2 text-ink-2">{l.message}</td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-6 text-center text-muted">
                    No submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
