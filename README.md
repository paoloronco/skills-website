# Skills Website

## Overview

Modern, futuristic, and minimal website with both dark and light design modes.  
It is fully responsive and adapts perfectly to both mobile and desktop screens.  
Ideal for showcasing your skills and competencies through a stylish website with animated skill bars.  

🔗 **Live Demo:** [skills.paoloronco.it](https://skills.paoloronco.it)

## How It Works

The project is built with **Next.js** and **TypeScript**.  
It uses a modular structure, making it easy to customize elements like the header, footer, and skill sections.

You can deploy it easily on **Vercel** or use **self-hosting**.

## Technologies Used

- **Next.js** (React framework)
- **TypeScript**
- **Tailwind CSS**
- Other standard npm packages

---

## Project Structure

```bash
├── project/
│   ├── .gitignore
│   ├── .eslintrc.js (o .eslint.config.js)
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── vite-env.d.ts
│       ├── components/
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   ├── ScrollProgress.tsx
│       │   ├── SkillCard.tsx
│       │   ├── SkillCategory.tsx
│       │   └── SkillsShowcase.tsx
│       ├── data/
│       │   └── skills.ts
│       ├── types/
│       │   └── skill.ts
│       └── utils/
│           ├── categoryIcons.tsx
│           └── motionProxy.tsx
```

## How to Edit the Site

Key editable components:

- **Folder `src/`**
  - `footer.tsx` — Edit the footer content.
  - `header.tsx` — Edit the navigation bar and site header.

- **Folder `src/Data/`**
  - `skills.ts` — Edit the list of skills or technologies displayed.

## Local Development

1. Install all required dependencies:
    ```bash
    npm install
    ```
2. Run the development server:
    ```bash
    npm run dev
    ```

If you want to simulate a production build locally:
```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Create a new project on [Vercel](https://vercel.com/).
2. Connect your GitHub repository.
3. Vercel will automatically detect the Next.js setup and configure the deployment.
4. (Optional) Set environment variables if needed.

### Self-Hosting

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Build and run for production:
    ```bash
    npm run build
    npm start
    ```
