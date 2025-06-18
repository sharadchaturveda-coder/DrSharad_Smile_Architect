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
│   │   └── page.tsx         # Main landing page component.
│   ├── components/          # Reusable React components.
│   │   ├── Footer.tsx       # Footer component.
│   │   ├── Navbar.tsx       # Navigation bar component.
│   │   └── ui/              # Generic, often unstyled or base UI components (e.g., from shadcn/ui).
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── textarea.tsx
│   └── lib/                 # Utility functions and libraries.
│       └── utils.ts         # Helper functions (e.g., `cn` for classnames).
└── docs/                    # Project documentation files (this directory).
    ├── 01-setup.md          # Setup and installation instructions.
    └── (other .md files...) # Detailed documentation for various aspects.
```

## Key Directories

*   **`/public`**: Contains static files like images, fonts, and other assets that are served directly by the web server. Files in this directory are accessible from the root of your application (e.g., `/next.svg`).
*   **`/src`**: This is where the core application code resides.
    *   **`/src/app`**: Implements the Next.js App Router. Each folder inside `app` can define a route.
        *   `layout.tsx`: Defines the main HTML structure shared across pages.
        *   `page.tsx`: Represents the UI for a specific route. The `page.tsx` in the root of `app` is the homepage.
        *   `globals.css`: For styles that apply to the entire application.
    *   **`/src/components`**: Houses reusable React components.
        *   **`/src/components/ui`**: Typically contains lower-level UI primitives or components from a library like shadcn/ui, which are then used to build more complex components.
    *   **`/src/lib`**: Contains shared utility functions, helper scripts, or library-specific configurations. `utils.ts` often includes functions like `cn` for conditionally joining class names, especially useful with Tailwind CSS.
*   **`/docs`**: Contains all detailed project documentation in Markdown format.

## Configuration Files (Root)

*   **`next.config.ts`**: Configures Next.js behavior, such as image optimization, redirects, and environment variables.
*   **`tailwind.config.ts`**: Customizes Tailwind CSS, including theme settings, plugins, and content paths.
*   **`postcss.config.mjs`**: Configuration for PostCSS, a tool for transforming CSS with JavaScript plugins (often used with Tailwind CSS).
*   **`tsconfig.json`**: Specifies the root files and the compiler options required to compile a TypeScript project.
*   **`eslint.config.mjs`**: Configures ESLint for static code analysis to find problems and enforce coding standards.
*   **`package.json`**: Manages project dependencies, scripts (like `npm run dev`, `npm run build`), and other metadata.
*   **`components.json`**: Often used by `shadcn/ui` to track installed UI components and project settings.
