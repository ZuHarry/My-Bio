import { hero, site } from "@/lib/content";
import Hl from "./Hl";
import Window from "./Window";
import Thumb from "./Thumb";

export default function Hero() {
  return (
    <section id="top" className="sky relative overflow-hidden px-6 pb-24 pt-32 sm:pt-40">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:min-h-[34rem] md:grid-cols-[1fr_1.4fr_1fr]">
        {/* left windows */}
        <div className="relative hidden h-80 md:block">
          <Window title="me.png" className="absolute left-0 top-0 w-48 -rotate-2">
            <div className="aspect-[4/5]">
              <Thumb src="{site.photo}" alt={site.name} variant="hill" />
            </div>
          </Window>
          <Window title="flutter.jpg" className="absolute bottom-0 right-4 w-28 rotate-3">
            <div className="aspect-square">
              <Thumb alt="" label="Flutter" />
            </div>
          </Window>
        </div>

        {/* centre title */}
        <div className="text-center">
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-light leading-[0.9] tracking-tight">
            software
            <br />
            <Hl>engineer</Hl>
          </h1>
          <p className="mx-auto mt-8 max-w-sm text-lg leading-snug">{hero.tagline}</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              see the projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink bg-white/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-hl"
            >
              say hi
            </a>
          </div>
        </div>

        {/* right windows */}
        <div className="relative hidden h-80 md:block">
          <Window title="ebike-sms.png" className="absolute right-0 top-0 w-44 rotate-2">
            <div className="aspect-[4/3]">
              <Thumb alt="" label="eBike" />
            </div>
          </Window>
          <Window title="einventory.png" className="absolute bottom-0 left-2 w-52 -rotate-1">
            <div className="aspect-[4/3]">
              <Thumb alt="" label="eInventory" />
            </div>
          </Window>
          <svg
            aria-hidden
            className="absolute -left-2 top-20 h-8 w-8 drop-shadow"
            viewBox="0 0 24 24"
          >
            <path d="M4 2l16 10-7 1.5L9.5 21z" fill="#fff" stroke="#0f1115" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>

        {/* mobile photo */}
        <div className="mx-auto w-40 md:hidden">
          <Window title="me.png">
            <div className="aspect-[4/5]">
              <Thumb src={site.photo} alt={site.name} variant="hill" />
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}
