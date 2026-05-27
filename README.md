# HPM Groundworks & Surfacing IOM

A modern, fully responsive business website for **HPM Groundworks & Surfacing**, a professional groundworks and surfacing contractor based on the **Isle of Man**. Built with Next.js 15, TypeScript, and Tailwind CSS.

---

## 🌐 Live Site

> Hosted via GitHub: [github.com/LYNKSPortal/hpm-groundworks-and-surfacing-iom](https://github.com/LYNKSPortal/hpm-groundworks-and-surfacing-iom)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Environment & Configuration](#environment--configuration)

---

## Overview

This website showcases HPM Groundworks & Surfacing's services including:

- **Resin Bound Surfacing** — driveways, paths, patios
- **Block Paving** — residential and commercial
- **Tarmac Surfacing** — driveways, car parks, sports courts
- **Groundworks & Civil Engineering** — excavation, drainage, groundworks

Key features include an animated hero section, a full photo gallery, a finance calculator, a contact form, service pages, supplier showcases, insurance documentation, and a set of resource/policy pages.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | ^16.2.6 | React framework, App Router, SSR/SSG |
| [TypeScript](https://typescriptlang.org) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | ^3.4.1 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | ^11.3.8 | Animations and transitions |
| [Lucide React](https://lucide.dev) | ^0.408.0 | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Conditional class management |

---

## Project Structure

```
hpm-groundworks/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout (Navbar, Footer, PageLoader)
│   ├── globals.css             # Global styles & Tailwind directives
│   ├── about/
│   │   └── page.tsx            # About us page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── gallery/
│   │   └── page.tsx            # Photo gallery page
│   ├── services/
│   │   └── page.tsx            # Services overview page
│   ├── suppliers/
│   │   └── page.tsx            # Approved suppliers page
│   ├── insurance/
│   │   └── page.tsx            # Insurance certificates page
│   ├── resources/
│   │   ├── page.tsx            # Resources hub
│   │   ├── care-maintenance/   # Care & maintenance guide
│   │   ├── cost-comparison/    # Cost comparison tool
│   │   ├── environmental-policy/
│   │   ├── health-safety-policy/
│   │   └── public-spaces-schools/
│   ├── privacy-policy/
│   │   └── page.tsx
│   └── terms-of-service/
│       └── page.tsx
│
├── components/                 # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHero.tsx
│   ├── PageLoader.tsx
│   ├── GalleryGrid.tsx
│   ├── ContactForm.tsx
│   ├── FAQAccordion.tsx
│   ├── FinanceCalculator.tsx
│   ├── HealthSafetyTimeline.tsx
│   ├── ImageLightbox.tsx
│   └── ScrollReveal.tsx
│
├── lib/
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── favicon.png
│   └── images/                 # All static image assets
│       ├── gallery-01.jpeg … gallery-36.jpeg
│       ├── resin-*.jpeg/png
│       ├── tarmac-*.jpeg
│       ├── block-paving-*.jpeg
│       ├── blend-*.webp        # Resin blend colour samples
│       └── insurance/          # Insurance certificate images
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── .gitignore
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, services overview, gallery preview, testimonials, finance calculator CTA |
| `/about` | Company background, team, values |
| `/services` | Full services breakdown (resin, paving, tarmac, groundworks) |
| `/gallery` | 34-image project photo gallery with hover zoom |
| `/contact` | Contact form, phone, email, address, map |
| `/suppliers` | Approved supplier logos and information |
| `/insurance` | Public liability and insurance certificate display |
| `/resources` | Hub for guides and policy documents |
| `/resources/care-maintenance` | Surface care and maintenance guide |
| `/resources/cost-comparison` | Surfacing cost comparison tool |
| `/resources/environmental-policy` | Environmental policy statement |
| `/resources/health-safety-policy` | Health & safety policy with timeline |
| `/resources/public-spaces-schools` | Commercial/schools surfacing info |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |

---

## Components

| Component | Description |
|---|---|
| `Navbar` | Sticky top navigation with mobile hamburger menu |
| `Footer` | Site footer with links, contact info, and social links |
| `PageHero` | Reusable hero banner with title, subtitle, and background image |
| `PageLoader` | Full-screen animated loading screen on initial visit |
| `GalleryGrid` | Responsive 4-column image grid with hover zoom (34 project photos) |
| `ContactForm` | Client-side contact form with validation |
| `FAQAccordion` | Animated accordion for FAQ sections |
| `FinanceCalculator` | Interactive finance/cost estimator tool |
| `HealthSafetyTimeline` | Animated vertical timeline for H&S policy |
| `ImageLightbox` | Full-screen image lightbox overlay |
| `ScrollReveal` | Framer Motion scroll-triggered reveal wrapper |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/LYNKSPortal/hpm-groundworks-and-surfacing-iom.git
cd hpm-groundworks-and-surfacing-iom

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **http://localhost:3000**

---

## Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts Next.js dev server with hot reload |
| Build | `npm run build` | Creates an optimised production build |
| Start | `npm run start` | Serves the production build locally |
| Lint | `npm run lint` | Runs ESLint across the project |

---

## Environment & Configuration

No environment variables are required for local development. The site uses only local image assets and no external API keys.

### `next.config.js`

Configured to allow remote images from:
- `images.unsplash.com`
- `via.placeholder.com`

### Tailwind

Custom configuration in `tailwind.config.ts` includes:
- Custom font families (`font-heading`, `font-body`)
- Extended colour palette (cyan accent `#43D5E9`)
- Custom shadow utilities (`shadow-cyan`)

---

## Deployment

The project is compatible with any Next.js hosting platform:

- **Vercel** — zero-config deployment, recommended
- **Netlify** — supported via Next.js adapter
- **Self-hosted** — run `npm run build && npm run start`

---

## Licence

Private — all rights reserved. © HPM Groundworks & Surfacing IOM.
