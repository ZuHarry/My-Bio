// Yellow "highlighter" italic serif word, e.g. <Hl>developer</Hl>
export default function Hl({ children }: { children: React.ReactNode }) {
  return (
    <em className="mx-1 inline-block bg-hl px-2 font-serif font-normal italic">{children}</em>
  );
}
