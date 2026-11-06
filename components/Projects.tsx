import { projects } from "@/lib/content";

const linkClass =
  "text-sm font-medium text-accent underline-offset-4 hover:underline";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-20 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

      <ul className="mt-10">
        {projects.map((p) => (
          <li
            key={p.title}
            className="border-t border-line py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <div className="flex gap-5">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className={linkClass}>
                    Live site
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer" className={linkClass}>
                    Source code
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
