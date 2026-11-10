export default function Folder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-[11px] font-medium">
      <svg width="64" height="52" viewBox="0 0 64 52" aria-hidden>
        <path d="M2 8a4 4 0 0 1 4-4h14l6 6h32a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" fill="#8cc4fb" />
        <path d="M2 16h60v26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" fill="#5da9f7" />
      </svg>
      {label}
    </div>
  );
}
