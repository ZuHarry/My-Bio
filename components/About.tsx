import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      <div className="mt-6 max-w-xl space-y-4 leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <dl className="mt-12 space-y-5">
        {about.skills.map((s) => (
          <div key={s.group} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <dt className="text-sm text-muted">{s.group}</dt>
            <dd className="font-medium">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
