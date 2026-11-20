# Jagriti Kushwaha — Portfolio

A premium, navbar-driven portfolio for **Jagriti Kushwaha**, a full-stack developer and BCA Cybersecurity student. The experience uses an editorial visual system, smooth motion, responsive layouts, and a complete project case-study flow.

## ✨ Features

- 🎬 **Single-Screen Navigation** — Navbar-driven sections with fluid transitions and no continuous page scroll.
- 📱 **Every-Device Responsive** — Dedicated layouts for desktop, tablet, and mobile navigation.
- 🌗 **Dark & Light Themes** — Theme-safe editorial colors and polished theme switching.
- 💼 **Project Case Studies** — Detailed challenge, approach, outcome, capabilities, and technology sections.
- ☁️ **Live Project Access** — Cloud File Storage opens at [cloud-fss.vercel.app](https://cloud-fss.vercel.app).
- 🚧 **Animated Development Screens** — Premium under-development experiences for projects still being refined.
- 📄 **Resume Viewer** — Public PDF resume available throughout the portfolio.
- ⚡ **Optimized Rendering** — Lazy-loaded sections, lightweight cursor behavior, GPU-friendly motion, and reduced-motion support.
- 📧 **Contact Section** — Direct email, GitHub, and LinkedIn actions.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: GSAP, Framer Motion
- **State Management**: Zustand
- **Data & Rendering**: Resume-derived portfolio content and lazy-loaded React sections

## 💻 Installation Steps

Follow these steps to set up the project locally:

1.  **Download and Extract**
    - Download the source code.
    - Extract it to your desired folder.

2.  **Open in VS Code**
    - Open the `frontend` folder in Visual Studio Code.

3.  **Install Dependencies**
    - Open your terminal.
    - Run the following command:
    ```bash
    npm install
    ```

## 🚀 Running the Project

1.  **Start the Development Server**
    Run the following command in your terminal:
    ```bash
    npm run dev
    ```

2.  **Open in Browser**
    The terminal will show a local URL, usually `http://localhost:5173`. Open it to view the site.

## 📦 Build Instructions

To create a production-ready build:

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This will generate a `dist` folder containing the optimized static files.

## ⚙️ Editable Sections for Customization

You can easily customize the content:

-   **Projects**: Edit `src/data/projects.js` to update project titles, descriptions, and images.
-   **UI Text**: Modify text mainly in `src/sections/` (e.g., `Hero.jsx`, `Skills.jsx`).
-   **Colors**: Change the color theme in `tailwind.config.js`.
-   **Resume**: Replace `frontend/public/Jagriti-Kushwaha-Resume.pdf` with an updated PDF.

## 📂 Folder Structure Overview

```
frontend/
├── public/              # Static assets (resume.pdf, favicon)
├── src/
│   ├── assets/          # Images, logos, icons
│   ├── components/      # Reusable UI components
│   ├── data/            # Static data files (projects.js)
│   ├── sections/        # Main page sections
│   ├── styles/          # Global CSS
│   ├── App.jsx          # Main layout
│   └── main.jsx         # Entry point
├── index.html           # Main HTML template
└── vite.config.js       # Vite configuration
```

## 📞 Contact

If you have any questions or would like to collaborate:

- **Developer**: Jagriti Kushwaha
- **Email**: [jagritikushwaha95@gmail.com](mailto:jagritikushwaha95@gmail.com)
- **GitHub**: [Jagriti-coder-786](https://github.com/Jagriti-coder-786)
- **LinkedIn**: [Jagriti Kushwaha](https://www.linkedin.com/in/jagriti-kushwaha-a221143b0/)