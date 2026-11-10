import { about, site } from "@/lib/content";
import Hl from "./Hl";
import Note, { Check } from "./Note";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-2">
        {/* skill shelves */}
        <div className="space-y-2">
          {about.skills.map((s) => (
            <div key={s.group}>
              <p className="mb-2 text-xs text-ink/50">{s.group}</p>
              <ul className="flex flex-wrap gap-2 pb-3">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg bg-white px-3 py-2 text-sm shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                  >
                    {i}
                  </li>
                ))}
              </ul>
              <div className="shelf-bar" />
            </div>
          ))}
        </div>

        {/* text + note */}
        <div>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            meet the <Hl>developer</Hl>
          </h2>
          <div className="mt-6 max-w-md space-y-4 leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Note title="currently..." className="mt-10 max-w-sm">
            <ul className="space-y-2 text-sm">
              <Check>looking for a graduate software engineer role</Check>
              <Check>based in {site.location}</Check>
              <Check>learning new tech, including AI</Check>
            </ul>
          </Note>
        </div>
      </div>
    </section>
  );
}
