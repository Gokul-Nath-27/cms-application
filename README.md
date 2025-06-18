# CMS Application

## Project Overview

This project is a frontend application for a Content Management System (CMS), designed to provide a user-friendly interface for managing and organizing media content collections. It targets content creators, editors, and administrators who need a streamlined way to interact with and control their digital assets. The key value propositions include efficient content organization, a modern user interface, and a scalable architecture.

## Tech Stack

The frontend is built using the following technologies:

- **Framework:** Next.js 15.3.3
- **State Management:** Zustand 5.0.5
- **Styling:** Panda CSS
- **Routing:** Next.js built-in routing
- **Animation:** Motion 12.18.1
- **Typescript:** 5

## Core Features

The frontend implements the following major functionalities:

- **Collection Management:** Allows users to view, rename, and organize media content collections.
- **State Management with Zustand:** Utilizes Zustand for efficient state management, specifically for collections and editing states.
- **Dynamic Styling with Panda CSS:** Employs Panda CSS for styling components, offering a type-safe and flexible approach.
- **Coming Soon Pages:** Includes placeholder pages for sections under development, providing a basic structure for future expansion.
- **Mock Data:** Collections are initialized with mock data.
- **Local Storage:** Collections are persisted to local storage when renamed.

## Build & Deployment Instructions

To build the application for production:

```bash
pnpm build
```

This command generates an optimized production build in the `.next` directory.

To start the production server:

```bash
pnpm start
```

The project is configured for deployment on platforms like Vercel, which automatically handles building and deploying Next.js applications. You can also deploy it to other platforms that support Node.js servers or static exports.

## Design System / UI Patterns

- **Panda CSS:** The project uses Panda CSS as a design system, which promotes consistency and theming capabilities.

- **Component-Based Architecture:** The UI is built using reusable React components, making it easier to maintain and extend.

## Testing & Linting

- **ESLint:** Configured with Next.js recommended settings for linting. Run `pnpm lint` to check for linting errors.
- **Typescript:** The project uses Typescript for type checking.
- The `package.json` includes scripts for linting, but no specific testing frameworks like Jest or Playwright are configured in the provided files.

## Future Improvements

- Add comprehensive unit and integration tests using Jest or Playwright.
- Implement a proper API integration for fetching and persisting collections, replacing the mock data and local storage.
- Enhance the UI with more advanced features, such as drag-and-drop functionality for reordering collections.
