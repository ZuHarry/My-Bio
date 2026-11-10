// Picture area: shows your image if you give one, otherwise a soft placeholder.
export default function Thumb({
  src,
  alt,
  label,
  variant = "pink",
  className = "",
}: {
  src?: string;
  alt: string;
  label?: string;
  variant?: "pink" | "hill";
  className?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`h-full w-full rounded-lg object-cover ${className}`} />
    );
  }
  if (variant === "hill") {
    return (
      <div className={`hill relative h-full w-full overflow-hidden rounded-lg ${className}`}>
        <span className="absolute left-[16%] top-[16%] h-6 w-14 rounded-full bg-white blur-[1px]" />
        <span className="absolute left-[26%] top-[10%] h-7 w-10 rounded-full bg-white blur-[1px]" />
      </div>
    );
  }
  return (
    <div
      className={`grid h-full w-full place-items-center rounded-lg bg-gradient-to-br from-[#ffd2e3] via-[#f6d6f2] to-[#c8dcff] ${className}`}
    >
      {label && <span className="font-serif text-3xl italic text-ink/40">{label}</span>}
    </div>
  );
}
