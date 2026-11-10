import { site, socials } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-20 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-6 max-w-xl leading-relaxed text-muted">
        I&apos;m looking for a Graduate Software Engineer role in web and mobile development. The fastest way to reach me is email.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-block text-2xl font-semibold tracking-tight text-accent underline-offset-4 hover:underline sm:text-3xl"
      >
        {site.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-fg"
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
            className="text-muted transition-colors hover:text-fg"
          >
            Download resume
          </a>
        </li>
      </ul>
    </section>
  );
}
