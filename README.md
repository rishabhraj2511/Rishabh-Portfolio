# Rishabh Raj - Portfolio

Full stack developer with a security mindset. This repo contains the source for my personal portfolio site, built to showcase resilient UI, thoughtful storytelling, and a steady learning journey across development and security.

Live demo: add your deployed URL here.

## Sections

- Home: Hero narrative and focus areas
- About: Profile, approach, and focus tabs
- Skills: Languages, web stack, and security toolkit
- Projects: Featured and ongoing work
- Journey: Timeline-style accordion
- Contact: Direct links and call to action

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS + tailwindcss-animate
- Radix UI primitives
- Lucide icons
- class-variance-authority + tailwind-merge
- TypeScript (UI utilities and effects)

## Design System Notes

- Fonts: Fraunces (display) and Manrope (body)
- Theme tokens live in `src/index.css`
- UI primitives live in `src/components/ui`
- Animation utilities: `reveal` classes, gooey text, and bento grid effects

## Getting Started

Prerequisites: Node.js (LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview the production build
npm run lint     # Lint the codebase
```

## Project Structure

```text
public/
src/
  assets/
  components/
    ui/
  lib/
  App.jsx
  main.jsx
  index.css
```

## Customization Guide

- Update hero copy and CTA buttons: `src/components/Hero.jsx`
- Adjust About tabs and strengths: `src/components/About.jsx`
- Update skills and proficiency bars: `src/components/Skills.jsx`
- Maintain project list and tags: `src/components/Projects.jsx`
- Change journey items: `src/components/Experience.jsx`
- Update contact links and CTA: `src/components/Contact.jsx`
- Modify navigation labels: `src/components/Navbar.jsx`
- Update theme tokens, gradients, and animations: `src/index.css`

## Deployment

Build the site and deploy the `dist` folder.

```bash
npm run build
```

Vite outputs static assets, so any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages) will work.

## Assets and Credits

- Demo background images are loaded from Unsplash in `src/components/bento-grid-demo.tsx`
- Profile assets live in `src/assets`

## Contact

- Email: rishabhraj8423@gmail.com
- GitHub: https://github.com/rishabhraj2511
- LinkedIn: https://www.linkedin.com/in/rishabh-raj-422477327/
- Instagram: https://www.instagram.com/rishabhraj880/

## License

This project is a personal portfolio. Add a license if you plan to reuse or redistribute the code.
