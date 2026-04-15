# Portfolio Website - Dolores Dev

## Project Overview
A personal portfolio website built with React and Vite, showcasing developer skills, projects, and information.

## Tech Stack
- **Frontend:** React 19 with JSX
- **Styling:** Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Build Tool:** Vite 8
- **Icons:** Lucide React
- **Compiler:** React Compiler (babel-plugin-react-compiler via @rolldown/plugin-babel)
- **Package Manager:** npm

## Project Structure
```
/
├── index.html          # Entry HTML
├── vite.config.js      # Vite configuration (port 5000, host 0.0.0.0)
├── package.json        # Dependencies and scripts
├── public/             # Static assets (images, favicons)
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Root component
    ├── index.css       # Global styles + Tailwind directives
    └── components/
        ├── Header.jsx  # Navigation and branding
        ├── Hero.jsx    # Hero section
        ├── About.jsx   # About section
        └── Title.jsx   # Reusable heading component
```

## Development
- Run: `npm run dev` (serves on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Target: Static site
- Build command: `npm run build`
- Public directory: `dist`
