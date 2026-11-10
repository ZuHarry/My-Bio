// An Apple-Notes style card
export default function Note({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-notes p-5 shadow-[0_10px_28px_rgba(40,60,100,0.14)] ${className}`}>
      <div className="flex items-center justify-between text-xs font-medium text-[#c28a00]">
        <span>‹ Notes</span>
        <span
          aria-hidden
          className="grid h-5 w-5 place-items-center rounded-full border border-[#c28a00]/60 text-[10px] leading-none"
        >
          ···
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug">
        <span className="bg-hl/70 px-1.5 [box-decoration-break:clone]">{title}</span>
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed">
      <span
        aria-hidden
        className="mt-[5px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#f5b324] text-[9px] font-bold text-white"
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}
