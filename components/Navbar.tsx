const links = [
  { label: "home", href: "#top" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-4">
      <nav className="pointer-events-auto">
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-full border border-ink/80 bg-white/70 px-3.5 py-1 text-sm underline underline-offset-2 backdrop-blur transition-colors hover:bg-hl sm:px-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
