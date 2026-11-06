export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-5xl font-bold">Hi, I'm Your Name</h1>
      <p className="max-w-xl text-lg text-gray-600">
        I build clean, fast web apps.
      </p>
      <a href="#projects" className="rounded-lg bg-black px-6 py-3 text-white">
        View my work
      </a>
    </section>
  );
}