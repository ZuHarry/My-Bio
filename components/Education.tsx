import { achievements, education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-20 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>

      <ul className="mt-10">
        {education.map((e) => (
          <li
            key={e.title}
            className="border-t border-line py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="max-w-md text-lg font-semibold tracking-tight">{e.title}</h3>
              <span className="text-sm text-muted">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {e.school} · {e.detail}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">{e.courses}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-lg font-semibold tracking-tight">Achievements</h3>
      <ul className="mt-4 max-w-xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
