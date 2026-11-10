// A little desktop "file window" with a title like slay.png
export default function Window({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-[#e8e8ec]/90 shadow-[0_12px_32px_rgba(40,70,120,0.2)] ${className}`}
    >
      <div className="px-3 py-1.5 text-[10px] font-semibold text-black/70">{title}</div>
      <div className="px-1.5 pb-1.5">{children}</div>
    </div>
  );
}
