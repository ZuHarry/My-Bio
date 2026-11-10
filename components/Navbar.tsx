import { site } from "@/lib/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {site.shortName}
        </a>
        <ul className="flex items-center gap-3 text-xs text-muted sm:gap-6 sm:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
