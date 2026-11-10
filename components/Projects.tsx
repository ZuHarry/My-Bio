import { projects } from "@/lib/content";
import Hl from "./Hl";
import Window from "./Window";
import Thumb from "./Thumb";
import Folder from "./Folder";

const pill =
  "rounded-full border border-ink px-4 py-1.5 text-sm transition-colors hover:bg-hl";

const slug = (t: string) =>
  t.toLowerCase().replace(/\(.*\)/, "").trim().replace(/[^a-z0-9]+/g, "-");

export default function Projects() {
  return (
    <section id="projects" className="sky px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
              serve the <Hl>projects</Hl>
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed">
              things i&apos;ve built, tested and shipped. click around xx
            </p>
          </div>
          <div className="flex gap-6">
            <Folder label="mobile" />
            <Folder label="web" />
          </div>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.title} className={i % 2 ? "md:mt-12" : ""}>
              <Window title={`${slug(p.title)}.png`}>
                <div className="rounded-xl bg-white p-4">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg border-4 border-pink">
                    <Thumb src={p.image} alt={p.title} label={p.tags[0]} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.title}</h3>
                  {p.note && <p className="mt-1 text-sm text-pink">{p.note}</p>}
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-md bg-skyblue px-2.5 py-1 text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                  {(p.live || p.code) && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className={pill}>
                          live site
                        </a>
                      )}
                      {p.code && (
                        <a href={p.code} target="_blank" rel="noreferrer" className={pill}>
                          source code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Window>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
