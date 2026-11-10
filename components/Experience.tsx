import { experience } from "@/lib/content";
import Hl from "./Hl";
import Note, { Check } from "./Note";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-white via-[#dce9fa] to-[#b9d3f3] px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.6fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            the <Hl>experience</Hl>
          </h2>
          <p className="mt-4 text-lg">(and the receipts...)</p>
          <p className="mt-4 max-w-xs leading-relaxed">
            internships, teams and a community I helped lead.
          </p>
        </div>

        <ul className="space-y-6">
          {experience.map((e) => (
            <li key={e.org + e.period}>
              <Note title={e.role}>
                <p className="text-sm text-ink/60">
                  {e.org} · {e.place}
                </p>
                <p className="mb-4 text-sm text-ink/60">{e.period}</p>
                <ul className="space-y-2 text-sm">
                  {e.points.map((p) => (
                    <Check key={p}>{p}</Check>
                  ))}
                </ul>
              </Note>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
