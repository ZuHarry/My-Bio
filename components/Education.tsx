import { achievements, education } from "@/lib/content";
import Hl from "./Hl";
import Note, { Check } from "./Note";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-[#e8f1fc] via-[#f4dbe9] to-[#f8e3ee] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
          find the <Hl>foundation</Hl>
        </h2>
        <p className="mt-4 max-w-md leading-relaxed">
          it&apos;s not about trends. it&apos;s about learning the craft properly.
        </p>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {education.map((e) => (
            <Note key={e.title} title={e.detail + " CGPA"}>
              <p className="font-semibold leading-snug">{e.title}</p>
              <p className="mt-1 text-sm text-ink/60">
                {e.school} · {e.period}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">{e.courses}</p>
            </Note>
          ))}

          <Note title="achievements unlocked" className="md:col-span-2">
            <ul className="grid gap-2 text-sm md:grid-cols-2 md:gap-x-8">
              {achievements.map((a) => (
                <Check key={a}>{a}</Check>
              ))}
            </ul>
          </Note>
        </div>
      </div>
    </section>
  );
}
