# 🌿 Sri Satyadeva Nursery — Botanical Editorial Redesign
> **Established 1950 | Kadiyam, Andhra Pradesh, India**  
> *A high-contrast, editorial, immersive botanical sanctuary website built with Vite, React, TypeScript, Lenis, GSAP, React Three Fiber, and Procedural HTML Canvas.*

---

## 🌟 Executive Summary & Features

This codebase replaces the static WordPress site at [http://satyadevanursery.in](http://satyadevanursery.in) with a **Botanical Editorial** web experience. Designed with a dark-forest default aesthetic (`#0B1A12`), luxury display serif typography (*Fraunces* & *Cormorant Garamond*), and 14 interactive sections:

1. **Sprouting Preloader (`00`)**: HTML Canvas seed germination animation with percent counter leading into dual leaf curtain wipes.
2. **Hero Mask & Rising Split-Text (`01`)**: Looping botanical nature video inside a leaf/arch clip-path mask that expands to full viewport on scroll scrub, paired with rising letter headline *"Rooted in Care."* and custom cursor.
3. **Interactive 3D Potted Plant Specimen (`01`)**: Built with React Three Fiber + Drei, supporting mouse/drag orbit controls.
4. **Scroll-Highlighted Manifesto (`02`)**: Word-by-word scroll-scrubbed text lighting up in emerald/terracotta, plus legacy odometer counters (500+ species, 75 years, 120 acres, 50k+ clients).
5. **Watch It Grow Simulation (`03`)**: Pinned HTML Canvas procedural L-System branching plant engine featuring underground soil cross-section, roots spreading, stem growth, leaves, flowers, day/night sky cycle, and interactive weather controls (*Water*, *Sunlight*, *Fertilizer*).
6. **Curated Collections Gallery (`04`)**: Pinned horizontal scroll showcase with 3D card tilt and glare effects.
7. **Shop-Style Catalogue (`05`)**: Live search, category filtering, grid/list view toggle, expandable plant detail modals, and direct *"Enquire on WhatsApp"* integration.
8. **Plant Doctor Quiz (`06`)**: Interactive 4-step environmental diagnostic wizard matching plants to user sunlight, space, and care preferences.
9. **Bento Grid Services (`07`)**: Asymmetric layout covering Landscape Architecture, Bulk Nursery Supply, Indoor Biophilic Setup, and Soil Health Doctor.
10. **Plant Care Sticky-Scroll Guide (`08`)**: Sticky story covering watering balance, soil micro-nutrients, pruning, and micro-climates.
11. **Behind the Nursery & Before/After Slider (`09`)**: 75-year legacy of Pulla Satyanarayana (Chantiyya Garu) and an interactive before/after garden makeover image comparison slider.
12. **Client Endorsements Carousel (`10`)**: Draggable testimonial carousel with ratings and customer reviews.
13. **FAQ Accordion (`11`)**: Multi-accordion answering common nationwide shipping, visiting, and guarantee queries.
14. **Contact & Location (`12`)**: Dark styled map representation, direct enquiry form, click-to-call buttons (+91 93460 81444), and floating WhatsApp action button.
15. **Botanical Footer (`13`)**: Scrolling outlined brand marquee and a back-to-top button that sprouts an animated canvas leaf plant on click!

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: Vite + React 19 + TypeScript
- **Smooth Scroll**: Lenis (`lenis`)
- **Scroll Storytelling**: GSAP 3 + ScrollTrigger
- **3D Graphics**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **Procedural Canvas**: Native HTML5 Canvas 2D API (L-system growth simulation & sprouting preloader)
- **Styling**: Vanilla CSS Modules with custom CSS variables, fluid `clamp()` typography scale, and film-grain SVG overlay
- **Icons**: `lucide-react`

---

## 🚀 Quick Setup & Local Development

1. **Clone or Navigate to Project Directory**:
   ```bash
   cd "c:\Users\PHANINDRA\Downloads\Satya deva Nursery"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` or `http://localhost:5175/`.

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 📝 How to Customize Content

### 1. Changing Business Info, Phone & WhatsApp
Open `src/data/nurseryData.ts` and modify the `NURSERY_DETAILS` object:
```typescript
export const NURSERY_DETAILS = {
  name: "Sri Satyadeva Nursery",
  phone: "+91 93460 81444",
  whatsapp: "+919346081444",
  email: "info@satyadevanursery.com",
  address: "Veeravaram Road, Kadiyapulanka, Kadiyam, Andhra Pradesh 533126, India",
  // ...
};
```

### 2. Updating Plant Catalogue & Products
Add or edit plant entries in `src/data/nurseryData.ts` inside the `PLANTS_DATA` array.

### 3. Replacing Hero Video or Imagery
- **Hero Video**: Edit `src/components/HeroSection.tsx` and change the `<source src="..." />` URL or local video file inside `public/videos/`.
- **Images**: All plant, service, and makeover images use high-resolution royalty-free Unsplash URLs in `nurseryData.ts`. Replace them with high-res photography of Sri Satyadeva Nursery's actual Kadiyam orchards.

---

## 🌐 Deployment Instructions (Vercel / Netlify / Custom Domain)

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root directory and follow the prompts.
3. In Vercel Project Settings → Domains, point `satyadevanursery.in` (A Record: `76.76.21.21` or CNAME `cname.vercel-dns.com`).

### Deploying to Netlify
1. Connect your GitHub repository to Netlify.
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Map `satyadevanursery.in` in Netlify Domain Management.
