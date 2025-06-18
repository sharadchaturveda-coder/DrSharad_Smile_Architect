# Project Setup

This document outlines the steps required to set up the **DrSharad Smile Architect** project locally for development.

## Prerequisites

Ensure you have the following installed on your system:

*   **Node.js**: Version 20 or higher is recommended. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager): Typically comes with Node.js.

## Installation Steps

1.  **Clone the Repository**:
    If you haven't already, clone the project repository to your local machine.
    ```bash
    git clone <repository-url>
    cd DrSharad_Smile_Architect
    ```

2.  **Install Dependencies**:
    Navigate to the project's root directory (`DrSharad_Smile_Architect`) and run the following command to install all necessary dependencies listed in `package.json`:
    ```bash
    npm install
    ```
    This will install Next.js, React, Tailwind CSS, and other development tools.

3.  **Environment Variables**:
    This project might require environment variables for certain configurations (e.g., API keys, database URLs).
    *   Create a `.env.local` file in the root of the project (`DrSharad_Smile_Architect`).
    *   Populate it with the necessary environment variables. Refer to `env.example` if available, or consult the project lead for required variables.
    ```env
    # Example .env.local
    # NEXT_PUBLIC_API_ENDPOINT=your_api_endpoint_here
    ```
    *(Note: Currently, no specific environment variables are strictly required for basic local setup based on the provided `next.config.ts`, but this is a good practice to be aware of for future enhancements.)*

## Running the Development Server

Once the dependencies are installed and environment variables (if any) are set up, you can start the Next.js development server:

```bash
npm run dev
```

This command will typically start the application on `http://localhost:3000`. Open this URL in your web browser to see the application running. The server supports hot-reloading, so changes you make to the code will automatically reflect in the browser.

## Building for Production

To create an optimized production build of the application, run:

```bash
npm run build
```
This command compiles the TypeScript code, optimizes assets, and prepares the application for deployment. The output will be in the `.next` directory.

## Starting the Production Server

After building the project, you can start a production server locally to test the build:

```bash
npm run start
```
This command serves the optimized build, usually on `http://localhost:3000`.

## Linting

To check the codebase for linting errors and ensure code quality, run:

```bash
npm run lint
```
This uses ESLint as configured in `eslint.config.mjs` and `eslint-config-next`.
