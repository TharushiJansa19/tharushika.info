# Tharushika Jansa — Portfolio

My personal portfolio website: a responsive, animated single-page site showing my experience, projects and skills as a web developer.

**Live site: [https://tharushika.info](https://tharushika.info)**

## What's on the site

| Section | What it shows |
| --- | --- |
| Hero | Introduction with a typewriter effect and a code-style card |
| About | Background, way of working and key strengths |
| Skills | Technologies and tools, grouped by area |
| Experience | A timeline of my roles |
| Projects | Selected work, with links to live sites and code where available |
| Education | Qualifications and certifications |
| Contact | Email, LinkedIn, GitHub and a message form |

## Features

- Responsive layout for mobile, tablet and desktop, with a collapsible menu on small screens
- Scroll-triggered animations and a scroll progress bar
- Downloadable résumé
- Contact form that opens the visitor's email app with the message filled in, so no server is needed
- Most content kept in one typed data file

## Built with

- [React 18](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for development and builds
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animation
- [React Icons](https://react-icons.github.io/react-icons/)

## Run it locally

You need [Node.js](https://nodejs.org/) (version 20 or later is recommended) and Git.

```bash
git clone https://github.com/TharushiJansa19/tharushika.info.git
cd tharushika.info
npm install
npm run dev
```

Then open `http://localhost:5173`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Type-checks the code and builds the site into `dist/` |
| `npm run preview` | Serves the built site locally for a final check |

## Project structure

```
├── public/                 Files copied as they are (photo, favicon, résumé PDF)
├── src/
│   ├── components/         One component per section, plus navbar and footer
│   ├── data/
│   │   └── portfolioData.ts   Profile, skills, experience, projects, education
│   ├── App.tsx             Puts the sections together
│   ├── index.css           Global and reusable styles
│   └── main.tsx            Entry point
├── index.html              Page title and meta tags
├── tailwind.config.js      Colours, fonts and animations
└── vite.config.ts          Build settings
```

## Updating the content

- **Profile, skills, experience, projects and education:** edit [`src/data/portfolioData.ts`](src/data/portfolioData.ts).
- **Section headings and some text** (such as the code card, the About story and the contact introduction): edit the matching file in [`src/components/`](src/components).
- **Résumé:** replace `public/Tharushika_Jansa_Resume.pdf`, keeping the same file name.
- **Photo:** replace `public/profile-photo.jpg`.

## Deployment

The site is static and hosted on Hostinger. Pushing to GitHub does **not** update the live site.

1. Run `npm run build`.
2. In Hostinger's File Manager, open the site's `public_html` folder.
3. Upload the **contents** of `dist/` (not the folder itself), overwriting the old files.
4. Clear the website cache in Hostinger, otherwise an old copy of a file such as the résumé may still be served.
5. Open [tharushika.info](https://tharushika.info) and check the changes.

## Contact

- Website: [tharushika.info](https://tharushika.info)
- LinkedIn: [tharushika-jansa](https://www.linkedin.com/in/tharushika-jansa-1a8835114/)
- GitHub: [TharushiJansa19](https://github.com/TharushiJansa19)
