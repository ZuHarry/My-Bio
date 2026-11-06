const projects = [
  {
    title: "Project One",
    description: "A short description of what it does and the problem it solves.",
    tech: "React, Tailwind",
    link: "https://github.com/yourname/project-one",
  },
  {
    title: "Project Two",
    description: "Another short description.",
    tech: "Next.js, TypeScript",
    link: "https://github.com/yourname/project-two",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="rounded-xl border p-6 transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.description}</p>
            <p className="mt-4 text-sm text-gray-500">{p.tech}</p>
          </a>
        ))}
      </div>
    </section>
  );
}