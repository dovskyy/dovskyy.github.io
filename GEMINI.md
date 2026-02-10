# GEMINI.md - Context for AI Agents

## Project Overview

**Project Name:** Portfolio - Marcel Lewandowski (.lewcode)
**Description:** A professional personal portfolio and business card website for a Java/Web Developer. It presents services (web development, SEO, marketing content), pricing, and a contact form.
**Architecture:** Static website.
**Tech Stack:**
*   **HTML5:** Semantic markup, accessibility focused (ARIA).
*   **CSS3:** Custom styles, CSS Variables for theming (Light/Dark mode), Flexbox/Grid layout, no external CSS frameworks.
*   **JavaScript (Vanilla):** DOM manipulation, `IntersectionObserver` for scroll animations, `localStorage` for theme persistence.

## File Structure

*   `index.html`: The main entry point containing all site content (Single Page Application feel).
*   `style.css`: Contains all visual styles, variables (`:root`), and responsive design rules.
*   `script.js`: Handles interactivity: theme toggling, scroll animations, navigation highlighting.
*   `assets/`: Directory for static assets (images).
*   `CNAME`: Configuration for the custom domain (`lewcode.pl`).
*   `claude.md`: Existing project context and instructions (reference this for detailed content/copywriting guidelines).

## Building and Running

Since this is a static site, there is no compile step.

**To Preview:**
1.  Open `index.html` directly in a web browser.
2.  OR serve locally using a static server:
    *   Python: `python -m http.server`
    *   Node: `npx serve`
    *   IntelliJ IDEA: Use the built-in browser preview.

**Deployment:**
*   The site is hosted on **GitHub Pages**.
*   Deployment is automatic when pushing to the `main` branch.
*   The `CNAME` file ensures the site resolves to `lewcode.pl`.

## Development Conventions

**Coding Style:**
*   **Simplicity:** Stick to vanilla technologies. Do not introduce build tools (Webpack, Vite) or frameworks (React, Vue) unless explicitly requested for a major refactor.
*   **CSS:** Use CSS Variables for colors and fonts to support theming. Ensure all new styles work in both Light and Dark modes.
*   **JS:** Keep logic simple and contained. Avoid heavy external libraries.
*   **Responsiveness:** Mobile-first approach. Test on small screens (320px+) up to large desktops.

**Content & Design:**
*   **Typography:** Headings: 'Outfit', Body: 'Inter'.
*   **Colors:** Defined in `:root`. Adhere to the defined palette (Primary Blue/Purple gradients).
*   **Tone:** Professional, expert, "Engineering Precision".
*   **SEO:** Maintain semantic HTML tags, meta tags, and structured data (JSON-LD) in `index.html`.

**Key Features to Maintain:**
*   **Dark/Light Mode:** Must persist via `localStorage`.
*   **Scroll Animations:** Elements should fade/slide in using the `reveal` class.
*   **Performance:** Lazy load images where possible. Keep the initial payload small.
