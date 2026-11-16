# 🏠 Nestora+ — Real Estate & Landmark Homes Landing Page

**Nestora+** (Est. 1997) is a modern, interactive real estate showcase and property listing landing page built with vanilla HTML, CSS, and JavaScript. Designed around a bold orange, white, and black aesthetic, it features smooth scroll animations, dynamic stat counters, custom horizontal carousels, and full-bleed video sections.

---

## ✨ Features

- **Hero & Sticky Navigation:** Animated hero typography (`@keyframes Titleanim`) paired with a sticky navigation bar (`#Navigation_bar`) linking to Properties, Studio, Process, and `+ADD PROPERTY`.
- **Scroll-Triggered Stat Counters:** Automatically counts up on scroll to highlight key business metrics:
  - **99%** Customer Satisfaction
  - **56+** Experienced Agents
  - **249** Total Properties Sold
- **Property Spotlight & Locations Carousel:**
  - Featured property view displaying square footage, beds/baths, pricing, and location details (e.g., *Haig*, *Myrtle Pool House*, *Clifton*, *Sidney House*, *Sweetman*).
  - Custom JavaScript-driven location slider with manual Previous/Next navigation and loop boundaries across California, Los Angeles, and North Justen.
- **Client & Partner Reviews Carousel:** Interactive horizontal slider featuring client testimonials alongside embedded video cards.
- **Animated Partner Showcase:** Staggered directional entrance animations for partner brand logos.
- **Video Lead Capture & Pre-Footer:** Full-width background video contact section with a listing subscription form and quick `+BUY` / `+SELL` action prompts.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic sections, embedded `<video>` backgrounds, and accessible navigation structure.
- **CSS3:** Custom properties (`--orange`, `--white`, `--black`), Flexbox layouts, sticky positioning, and CSS `@keyframes` animations.
- **Vanilla JavaScript (ES6+):** DOM manipulation, `window.onscroll` event triggers, `setInterval` number counters, and custom CSS `translateX` slider logic.

---

## 📂 Project Structure

```text
nestora/
├── index.html          # Main landing page markup
├── style.css           # Custom styling, variables, layout, and keyframe animations
├── script.js           # Scroll counters, location slider, and review carousel logic
└── assets/             # Property images, partner logos, and background videos
```

*(Note: Update the filenames above if your `.html`, `.css`, or `.js` files use different names.)*

---

## 🚀 Getting Started

1. **Clone or download** the repository to your local machine:
   ```bash
   git clone https://github.com
   ```
2. **Navigate into the project directory:**
   ```bash
   cd nestora
   ```
3. **Run the project:** Open `index.html` directly in any modern web browser, or use a local development server (such as the VS Code **Live Server** extension).
