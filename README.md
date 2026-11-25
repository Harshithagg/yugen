# YŪGEN | Modern Japanese Ramen Kitchen

A responsive restaurant website for a fictional ramen restaurant in Shibuya, Tokyo. It has a scroll-driven 3D hero, a sliding gallery, a menu with dish details, and a table-booking flow.

**Live site:** https://yugen-brown.vercel.app


> **Concept project.** This is a personal portfolio piece. The restaurant is fictional, bookings are simulated (nothing is saved or emailed), and the menu ratings are placeholders.

## Features

- **3D scroll hero.** A ramen bowl built in Spline whose ingredients fall as you scroll, driven by scroll position. It stops at the end of the hero and does not carry into the next section. The 3D scene is skipped on phones for performance.
- **Sliding gallery.** A carousel where the center photo is large and the neighbors are smaller. Arrows, dots, or clicking a side image changes the active photo, with spring animations.
- **Menu.** Category tabs and a data-driven list. Clicking a dish opens a popup with its photo, rating, prep time, spice level, and ingredients. Esc or a backdrop click closes it.
- **Table reservation.** Date picker, time selectors, and guest count. Validation covers opening hours, past times, phone, and email. It simulates availability and confirms with a booking reference.
- **Location.** One tap opens Google Maps with directions.
- **Responsive.** Built for desktop, tablet, and mobile, with a full-screen mobile menu.

## Built with

| Tool | Used for |
|---|---|
| React + Vite | Components and fast dev tooling |
| Plain CSS | Layout, theming through CSS variables, and responsive design |
| Motion | Gallery and popup animations, and scroll progress |
| Spline (`@splinetool/react-spline`) | Interactive 3D hero |
| Vercel | Hosting, with automatic deploys on every push |

Designed in **Figma**, with the 3D scene made in **Spline and blender**.

## Performance

Lighthouse scores on mobile: **Performance 90 · Accessibility 90 · Best Practices 100 · SEO 100**

## Run it locally

```bash
git clone https://github.com/Harshithagg/yugen.git
cd yugen
npm install
npm run dev
```

Then open the local address shown in the terminal (usually `http://localhost:5173`).

To create a production build, run `npm run build`.

## Author

**Harshitha GG**