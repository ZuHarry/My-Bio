import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="pb-24 pt-20 sm:pb-32 sm:pt-28">
      {site.photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={site.photo}
          alt={site.name}
          className="mb-8 h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
        />
      )}
      <p className="mb-5 text-sm text-muted">
        {site.name} · {site.role}
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
        {hero.headline}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.intro}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-fg"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
