# Folder Structure

This document provides an overview of the project's directory structure to help you navigate the codebase effectively.

```
DrSharad_Smile_Architect/
├── .gitignore               # Specifies intentionally untracked files that Git should ignore.
├── components.json          # Likely related to UI component configuration (e.g., shadcn/ui).
├── eslint.config.mjs        # ESLint configuration for code linting.
├── next.config.ts           # Next.js configuration file.
├── package-lock.json        # Records the exact versions of dependencies.
├── package.json             # Lists project dependencies, scripts, and metadata.
├── postcss.config.mjs       # PostCSS configuration, often used with Tailwind CSS.
├── README.md                # Main project README (to be updated with a high-level overview).
├── tailwind.config.ts       # Tailwind CSS configuration file.
├── tsconfig.json            # TypeScript compiler options.
├── public/                  # Static assets that are served directly.
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                     # Main source code for the application.
│   ├── app/                 # Next.js App Router directory.
│   │   ├── favicon.ico      # Application favicon.
│   │   ├── globals.css      # Global CSS styles.
│   │   ├── layout.tsx       # Root layout component for the application.
│   │   └── page.tsx         # Main landing page - now a shell importing sections.
│   ├── components/          # Reusable React components.
│   │   ├── common/          # General-purpose common components.
│   │   │   └── PlaceholderIcon.tsx
│   │   ├── landing/         # Components specific to the landing page sections.
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustLogosSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── CredentialsSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactDetails.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── FinalCTASection.tsx
│   │   ├── Navbar/          # Components related to the Navbar.
│   │   │   ├── DesktopNav.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── constants.ts
│   │   ├── Footer.tsx       # Footer component.
│   │   ├── Navbar.tsx       # Main Navbar component (imports DesktopNav, MobileNav).
│   │   └── ui/              # Generic UI components (e.g., shadcn/ui).
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── textarea.tsx
│   ├── hooks/               # Custom React hooks.
│   │   └── useScrollEffect.ts
│   └── lib/                 # Utility functions and libraries.
│       ├── utils.ts         # Helper functions (e.g., `cn` for classnames).
│       └── utils/           # More specific utility modules.
│           └── scroll.ts    # Smooth scrolling utility.
└── docs/                    # Project documentation files (this directory).
    ├── 01-setup.md          # Setup and installation instructions.
    └── (other .md files...) # Detailed documentation for various aspects.
```

## Key Directories

*   **`/public`**: Contains static files like images, fonts, and other assets that are served directly by the web server. Files in this directory are accessible from the root of your application (e.g., `/next.svg`).
*   **`/src`**: This is where the core application code resides.
    *   **`/src/app`**: Implements the Next.js App Router.
        *   `layout.tsx`: Root layout.
        *   `page.tsx`: Entry point for the landing page, now primarily imports section components.
    *   **`/src/components`**: Contains all React components.
        *   **`/src/components/common`**: Small, reusable components used across multiple parts of the site (e.g., `PlaceholderIcon.tsx`).
        *   **`/src/components/landing`**: Components that make up the different sections of the main landing page (e.g., `HeroSection.tsx`, `ServicesSection.tsx`).
        *   **`/src/components/Navbar`**: Components specifically for building the navigation bar (e.g., `DesktopNav.tsx`, `MobileNav.tsx`).
        *   **`/src/components/ui`**: Base UI primitives (e.g., from shadcn/ui).
    *   **`/src/hooks`**: Custom React hooks (e.g., `useScrollEffect.ts`).
    *   **`/src/lib`**: Shared utility functions and libraries.
        *   `utils.ts`: General utilities like `cn`.
        *   `/src/lib/utils/`: Directory for more specific utility modules like `scroll.ts`.
*   **`/docs`**: Project documentation.

## Configuration Files (Root)

*   **`next.config.ts`**: Configures Next.js behavior, such as image optimization, redirects, and environment variables.
*   **`tailwind.config.ts`**: Customizes Tailwind CSS, including theme settings, plugins, and content paths.
*   **`postcss.config.mjs`**: Configuration for PostCSS, a tool for transforming CSS with JavaScript plugins (often used with Tailwind CSS).
*   **`tsconfig.json`**: Specifies the root files and the compiler options required to compile a TypeScript project.
*   **`eslint.config.mjs`**: Configures ESLint for static code analysis to find problems and enforce coding standards.
*   **`package.json`**: Manages project dependencies, scripts (like `npm run dev`, `npm run build`), and other metadata.
*   **`components.json`**: Often used by `shadcn/ui` to track installed UI components and project settings.
