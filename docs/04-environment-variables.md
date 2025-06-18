# Environment Variables

This document explains how environment variables are managed and utilized within the **DrSharad Smile Architect** project.

## Overview

Next.js has built-in support for environment variables, allowing you to configure your application for different environments (development, production, testing) without hardcoding sensitive information or configuration settings directly into your codebase.

## Types of Environment Variables

Next.js distinguishes between two types of environment variables:

1.  **Server-Side Environment Variables**: These are only available in the Node.js environment (e.g., during server-side rendering, API routes, or build time). They are not exposed to the client-side browser.
2.  **Client-Side Environment Variables (Browser-Exposed)**: To expose an environment variable to the browser, it must be prefixed with `NEXT_PUBLIC_`.

## Configuration

### `.env` Files

Environment variables are typically defined in `.env` files at the root of the project (`DrSharad_Smile_Architect`). Next.js supports several `.env` file variants, loaded in a specific order of precedence:

1.  **`.env.development.local`**: Local overrides for the development environment. Not committed to Git.
2.  **`.env.production.local`**: Local overrides for the production environment. Not committed to Git.
3.  **`.env.test.local`**: Local overrides for the test environment. Not committed to Git.
4.  **`.env.local`**: Local overrides for all environments. This file should be added to `.gitignore` as it can contain sensitive information.
5.  **`.env.development`**: Default variables for the development environment. Can be committed to Git.
6.  **`.env.production`**: Default variables for the production environment. Can be committed to Git.
7.  **`.env.test`**: Default variables for the test environment. Can be committed to Git.
8.  **`.env`**: Default variables for all environments. Can be committed to Git.

Variables defined in files with higher precedence (e.g., `.env.local`) will override those in files with lower precedence (e.g., `.env`).

### Example `.env.local`

```env
# Server-side only
API_KEY=your_secret_api_key
DATABASE_URL=your_database_connection_string

# Exposed to the browser
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_API_ENDPOINT=https://api.example.com/v1
```

## Accessing Environment Variables

*   **Server-Side**:
    You can access server-side environment variables directly via `process.env`:
    ```typescript
    // e.g., in a Server Component or API route
    const apiKey = process.env.API_KEY;
    ```

*   **Client-Side (Browser)**:
    Variables prefixed with `NEXT_PUBLIC_` are available in the browser via `process.env`:
    ```typescript
    // e.g., in a Client Component
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    ```
    These variables are embedded into the JavaScript bundle during the build process.

## Current Project Usage

Based on the current `next.config.ts`, there are no explicit custom environment variables defined for application logic. The configuration primarily uses built-in Next.js features:

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

However, for future development, if external services (APIs, databases, analytics) are integrated, environment variables should be used as described above to manage their configurations securely and flexibly.

## Best Practices

*   **Never commit sensitive information** (API keys, secrets, database credentials) to your Git repository. Use `.env.local` for such values and add it to `.gitignore`.
*   Use an `.env.example` file (committed to Git) to provide a template for required environment variables, without their actual values. This helps new developers set up the project.
*   Prefix browser-exposed variables with `NEXT_PUBLIC_`.
*   Be mindful of what you expose to the client-side, as these variables will be visible in the browser's JavaScript bundle.
