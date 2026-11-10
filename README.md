# Portfolio files

Copy these into the project created with `npx create-next-app@latest my-portfolio`
(TypeScript, Tailwind, App Router, "@/*" import alias = Yes).

- Replace app/layout.tsx, app/page.tsx, app/globals.css
- Add the components/ and lib/ folders to the project root
- Add public/resume.pdf (your CV) and, later, public/photo.jpg

Run `npm run dev`. All text lives in lib/content.ts.
To show your photo, set `photo: "/photo.jpg"` in lib/content.ts.
