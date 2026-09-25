# Personal Developer Portfolio

A personal developer portfolio built with **Astro** and **Tailwind CSS** to present my technical capabilities, development approach, selected case studies, services, and contact information.

The current version is a customized and extended implementation based on an open-source portfolio template. The original project provided the initial foundation; the current structure, content, sections, configuration, and presentation have been adapted for my own developer profile and portfolio goals.

## Overview

This portfolio is designed to communicate more than a list of technologies. It focuses on:

* Web development capabilities
* Engineering and problem-solving approach
* Selected development case studies
* Services offered
* Technical areas of interest
* Contact and professional links

The portfolio is intentionally kept lightweight and static to provide fast page delivery and simple deployment.

## Built With

* **Astro** — Static site framework
* **Tailwind CSS** — Utility-first CSS framework
* **TypeScript** — Type-safe configuration and development
* **Tabler Icons** — Open-source icon library
* **GitHub Pages** — Deployment target

## Project Structure

```text
my-portfolio/
├── public/
│   └── ...                    # Static assets
├── src/
│   ├── components/
│   │   ├── Capabilities.astro # Technical capabilities
│   │   ├── CaseStudies.astro  # Case studies overview
│   │   ├── CaseStudy.astro    # Individual case study presentation
│   │   ├── Contact.astro      # Contact section
│   │   ├── Footer.astro       # Site footer
│   │   ├── Header.astro       # Navigation header
│   │   ├── Hero.astro         # Main introduction
│   │   └── Services.astro     # Services section
│   ├── pages/
│   │   └── index.astro        # Main portfolio page
│   ├── styles/
│   │   └── ...                # Global styles
│   └── config.ts              # Portfolio configuration
├── .github/
│   └── ...                    # Repository workflows/configuration
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## Development

### Requirements

* Node.js
* npm
* Git

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/010555/my-portfolio.git
cd my-portfolio
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available through the local Astro development server.

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The portfolio is configured for deployment through **GitHub Pages**.

The repository uses the `/my-portfolio/` base path required by the GitHub Pages project deployment configuration.

Deployment configuration is maintained inside the repository rather than relying on manual changes after each build.

## Case Studies

The portfolio includes selected development work presented as case studies rather than simply listing projects.

Each case study is intended to communicate:

* The problem being addressed
* The technical approach
* The technologies involved
* Architectural decisions
* Implementation considerations
* The resulting product or system

The primary portfolio case study is the **FlowTrack Project Management System (PMS)**.

## Engineering Approach

The portfolio reflects a development approach centered around:

* Understanding requirements before implementation
* First-principles reasoning
* Clear separation of responsibilities
* Maintainable project structure
* Practical testing
* Security and production-readiness considerations
* Iterative development
* Using existing tools and open-source software where appropriate

## Attribution

This portfolio started from the open-source **DevPortfolio** template by Ryan Fitzgerald.

The original template provided the initial project structure and foundation. The current version has been substantially customized and extended for my personal developer portfolio, including its content, sections, case studies, configuration, deployment setup, and presentation.

Original project:

https://github.com/RyanFitzgerald/devportfolio

The original project's license and attribution requirements remain respected.

## License

This repository contains work derived from an open-source project.

Please refer to the original project's license and the repository's `LICENSE.md` file for applicable licensing terms.

## Author

**Ahmed Abdu**

Personal developer portfolio showcasing selected web development work, technical capabilities, and engineering approach.
