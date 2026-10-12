<<<<<<< HEAD
# Sumant Padhy — Developer Portfolio

A responsive dark portfolio built with React, Vite, CSS, and Lucide icons. It highlights AI/ML, web development, and Unity game development projects.

## Requirements
- Node.js 18+ (a current LTS version is recommended)
- npm (included with Node.js)

## Run locally
1. Extract the ZIP file.
2. Open the `sumant-portfolio` folder in VS Code.
3. Open the VS Code terminal (`Terminal` → `New Terminal`).
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Create a production build
```bash
npm run build
npm run preview
```
The production website is generated in the `dist` folder.

## Deploy free with Vercel
1. Create a GitHub repository and upload the contents of this project.
2. Sign in to Vercel with GitHub and import the repository.
3. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
4. Click Deploy. Vercel will provide a public URL.

Alternative: Netlify can deploy the project using build command `npm run build` and publish directory `dist`.

## Personalize before publishing
- `src/main.jsx`: update profile details, project descriptions, skill lists, and social links.
- The Contact section includes your email address and a mailto link.
- Add project GitHub/demo links only when you have working public links. Project cards currently open an in-page case-study modal.
- Campus Connect is described as a React frontend prototype. Update this wording if backend/database functionality is implemented.
- Student Performance Analysis is intentionally listed as a possible future project, not a completed project.

## Notes
- Google Fonts are loaded from Google Fonts, so the font styling requires an internet connection. The site otherwise uses CSS-built project artwork and does not require external image assets.
- The “Copy profile details” button uses the browser clipboard when permission is available; if clipboard access is blocked, it opens LinkedIn.


## Contact and resume

- Email: sum5328rocky@gmail.com
- Resume PDF: `public/resume.pdf` (downloaded from the portfolio Contact section)

To update the resume later, replace `public/resume.pdf` with your latest PDF while keeping the same filename.
=======
# sumant-portfolio
My personal portfolio website built with React and Vite    
>>>>>>> 56a3d352509dd2a29b0651cae48b9225c7edc353
