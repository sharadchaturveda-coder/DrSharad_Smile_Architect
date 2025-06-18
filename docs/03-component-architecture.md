# Component Architecture

This document describes the component architecture of the **DrSharad Smile Architect** project, focusing on how components are organized and utilized.

## Overview

The project employs a modular component structure, primarily located within the `src/components` directory. This promotes reusability, maintainability, and a clear separation of concerns. Components are built using React and TypeScript, and styled with Tailwind CSS.

## Core Component Directories

*   **`src/components`**: This is the main directory for custom, application-specific React components.
    *   **`Navbar.tsx`**: Defines the `Navbar` component, responsible for site navigation.
    *   **`Footer.tsx`**: Defines the `Footer` component, typically containing copyright information, links, etc.
    *   These components are likely used in the main application layout (`src/app/layout.tsx`) to provide consistent UI elements across pages.

*   **`src/components/ui`**: This directory houses generic, often lower-level UI building blocks. These components are designed to be highly reusable and customizable. Based on the project dependencies (`@radix-ui/react-slot`, `class-variance-authority`, `tailwind-merge`) and file names, these are likely components from or inspired by **shadcn/ui**.
    *   **`button.tsx`**: Provides a `Button` component.
    *   **`card.tsx`**: Contains various `Card` related components (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`) for displaying content in a structured card format.
    *   **`input.tsx`**: Provides an `Input` field component.
    *   **`textarea.tsx`**: Provides a `Textarea` component.

    These UI components are typically styled using Tailwind CSS and leverage utility functions for class name management.

## Key Libraries and Utilities

*   **React**: The core library for building user interfaces.
*   **TypeScript**: For static typing, enhancing code quality and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework used for styling components directly in the markup.
*   **shadcn/ui (Implied)**: The structure and dependencies suggest the use or influence of shadcn/ui, which provides accessible and customizable components that can be copied into your project.
    *   **Radix UI**: Primitives for building accessible design systems and web applications. shadcn/ui components are often built on top of Radix UI.
    *   **`class-variance-authority` (CVA)**: Used for creating flexible and type-safe UI components with variants.
    *   **`clsx` and `tailwind-merge`**: Used together in the `cn` utility function.
        *   `clsx`: A tiny utility for constructing `className` strings conditionally.
        *   `tailwind-merge`: Merges Tailwind CSS classes in JavaScript without style conflicts.

*   **`src/lib/utils.ts`**:
    *   Contains the `cn` function:
        ```typescript
        import { clsx, type ClassValue } from "clsx"
        import { twMerge } from "tailwind-merge"

        export function cn(...inputs: ClassValue[]) {
          return twMerge(clsx(inputs))
        }
        ```
        This helper function is crucial for managing CSS classes in components, especially when dealing with conditional classes or variants provided by CVA and Tailwind CSS. It ensures that class names are applied correctly and efficiently.

## Component Usage Pattern

1.  **Base UI Components (`src/components/ui`)**: These provide the fundamental building blocks (buttons, cards, inputs). They are designed to be generic and styled with Tailwind CSS, often incorporating variants through CVA.
2.  **Application-Specific Components (`src/components`)**: These are higher-level components (like `Navbar`, `Footer`) that might compose multiple UI components from `src/components/ui` or implement specific business logic.
3.  **Pages (`src/app/**/*.tsx`)**: Pages consume both application-specific components and UI components to build the final user interface for different routes.

This layered approach allows for a clean separation between generic UI elements and more complex, feature-specific components, making the codebase easier to understand, scale, and maintain.
