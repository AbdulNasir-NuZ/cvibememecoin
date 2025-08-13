# CVIBE — Modern Landing Page (Next.js + TypeScript + Tailwind)

A modern, animated landing page for the CVIBE meme token featuring:
- Section-based video backgrounds
- Glassmorphism cards and stylish buttons
- A traveling 3D coin rendered with vanilla three.js, moving between sections on scroll
- A 3D beach scene in the footer rendered with vanilla three.js
- Accessible contact form using a Next.js Server Action

Including a README is recommended to orient contributors and improves workspace conformance. [^1]

---

## 1) Prerequisites

- Node.js 20.x LTS (recommended) or 18.18+
- A package manager: npm, pnpm, or yarn

Tip: If you use nvm, run: nvm use 20

---

## 2) Install dependencies

This project uses Next.js (App Router), Tailwind CSS, shadcn/ui primitives, lucide-react for icons, and three.js for 3D rendering.

If your package manager is npm:
- npm install

If pnpm:
- pnpm install

If yarn:
- yarn install

Key runtime dependencies (already in package.json or inferred):
- next, react, react-dom
- tailwindcss (and Tailwind v4 setup)
- lucide-react
- class-variance-authority, clsx
- three

Key dev dependencies:
- typescript, @types/node, @types/react, @types/react-dom
- postcss (if your Tailwind setup uses PostCSS)

If any package is missing in your local environment, install it with your package manager (example with npm):
- npm install next react react-dom tailwindcss lucide-react class-variance-authority clsx three
- npm install -D typescript @types/node @types/react @types/react-dom postcss

---

## 3) Provide background videos

Place MP4 files in public/videos:
- public/videos/hero.mp4
- public/videos/intro.mp4
- public/videos/about.mp4
- public/videos/how-to-buy.mp4
- public/videos/features.mp4
- public/videos/contact.mp4

You can change file names or paths by editing the videoSrc props in app/page.tsx.

---

## 4) Run the project

Development:
- npm run dev
- Open http://localhost:3000

Production:
- npm run build
- npm run start

---

## 5) Project structure (high level)

- app/
  - page.tsx — Home page (sections, layout)
  - actions.ts — Server Action used by the contact form
  - layout.tsx, globals.css — App shell and global styles (already present)
- components/
  - section-with-bg.tsx — Section wrapper with background video and reduced motion fallback
  - button-3d.tsx — Stylish button with a 3D look
  - heading-3d-css.tsx — Shiny “3D” CSS heading (no WebGL)
  - contact-form.tsx — Client form that posts to the Server Action
  - coin-3d.tsx — Vanilla three.js coin renderer (real 3D)
  - coin-travel-3d.tsx — Floating overlay that moves the 3D coin between sections on scroll
  - footer-beach-3d.tsx — Vanilla three.js beach scene in the footer

Notes:
- shadcn/ui primitives are available in components/ui
- Icons use lucide-react

---

## 6) Configuration notes

- Section videos: Pass your MP4 paths via the videoSrc prop on SectionWithBg.
- 3D traveling coin:
  - coin-3d.tsx controls materials, metalness, roughness, and spin speed.
  - coin-travel-3d.tsx controls the overlay size and scroll path:
    - startSelector (default: #intro)
    - endSelector (default: #contact)
    - size (default: 176)
- 3D footer beach:
  - footer-beach-3d.tsx creates a sand disc, ocean plane, palm, umbrella, and surfboard, with gentle motion.
  - Tweak camera and lights there to adjust the scene look.
- Contact form:
  - app/actions.ts simulates sending (latency and console log). Replace with your real email or webhook integration later.

---

## 7) Troubleshooting

- Error: Cannot read properties of null (reading 'addEventListener')
  - This typically occurs when a library tries to bind DOM listeners before a node exists. The 3D parts here use vanilla three.js and only attach a window resize listener, which is removed on unmount. If you copy these components elsewhere, keep the cleanup in the useEffect return functions to avoid leaks.

- Error: Class constructor ... cannot be invoked without 'new'
  - Happens if you try to use three.js class constructors incorrectly or mix versions. This code uses imperative three.js (new THREE.Foo(...)) to avoid that pitfall. Ensure a single version of three is installed.

- Blank canvas or flicker
  - Verify your canvas container has width and height (Tailwind classes).
  - Confirm hardware acceleration is enabled in your browser.

---

## 8) Customization

- Colors and glassmorphism: Update Tailwind classes in app/page.tsx and in button-3d.tsx.
- Coin appearance: Change materials, colors, or emblem geometry in coin-3d.tsx.
- Coin path and speed: Adjust interpolation, end position, and overlay size in coin-travel-3d.tsx.
- Footer scene: Change ocean color, camera position, or add more props in footer-beach-3d.tsx.

---

## 9) Deployment

- Vercel (recommended): Push to GitHub and deploy. Next.js App Router is supported out of the box.
- Other Node hosts: Run a build then start the server with your process manager.

---

## 10) FAQ

- Environment variables?
  - None required to run this demo. If you add email/webhook integrations for the contact form, follow the provider’s instructions and reference them only on the server in Next.js.

- Where do I change text and copy?
  - Most display content is in app/page.tsx and inside the PurpleGlassCard children.

---

## 11) Contributing

- Create a new branch for your changes.
- Run the app locally and verify the UI/3D perform as expected.
- Commit with clear messages and open a PR.

---

## 12) License

Private project. All rights reserved by the project owner.

---

[^1]: A README in the repository helps orient users and satisfies recommended workspace practices. 
```
