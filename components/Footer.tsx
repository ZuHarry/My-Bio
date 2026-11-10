import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-lime px-6 pb-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-ink/30 pt-6 text-sm">
        {/* <span>
          © {new Date().getFullYear()} {site.name}
        </span> */}
        <a href="#top" className="underline underline-offset-2">
          back to top
        </a>
      </div>
    </footer>
  );
}
