import { site, socials } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-lime px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] font-light leading-[1.02] tracking-tight">
          thanks for scrolling, now let&apos;s{" "}
          <span className="font-serif italic">build something</span> together xx
        </h2>

        <p className="mt-8 max-w-md leading-relaxed">
          i&apos;m looking for a graduate software engineer role in web and mobile development.
          the fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-80"
        >
          {site.email}
        </a>

        <ul className="mt-8 flex flex-wrap gap-3 text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full border border-ink px-4 py-1.5 transition-colors hover:bg-hl"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full border border-ink px-4 py-1.5 transition-colors hover:bg-hl"
            >
              download resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
