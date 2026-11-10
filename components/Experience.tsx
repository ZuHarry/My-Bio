import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

      <ul className="mt-10">
        {experience.map((e) => (
          <li
            key={e.org + e.period}
            className="border-t border-line py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
              <span className="text-sm text-muted">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {e.org}, {e.place}
            </p>
            <ul className="mt-4 max-w-xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
