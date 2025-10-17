![Hero Image](./public/images/github-image.png)

# Ethereal Notes - Your Modern Note-Taking Oasis

## Overview

Ethereal Notes offers a contemporary and intuitive note-taking experience, drawing inspiration from the flexibility of Notion. Built with the cutting-edge Next.js 15 framework, leveraging the robust backend capabilities of Convex for seamless logic and data persistence, and styled with the utility-first approach of Tailwind CSS v4 in conjunction with the elegant UI components of ShadCN UI and Radix Primitives, Ethereal Notes aims to provide a smooth and powerful platform for organizing your thoughts and ideas.

The application features a versatile block-based editor powered by Blocknote, ensuring content creation is both flexible and structured. Real-time synchronization keeps your notes up-to-date across all your devices, while modern React 19 features and carefully chosen animation libraries contribute to a polished and engaging user experience.

## Resources and useful links

- Figma Design: <https://www.figma.com/community/file/1529103111138654776>
- Homepage: <https://ethereal-notes-application.vercel.app/>

## Tech Stack

Ethereal Notes is built on a robust and modern technology stack, ensuring performance, scalability, and an excellent developer experience.

### Frontend Powerhouse

- **Next.js 15 (App Router)**: The cutting-edge React framework for building fast, scalable, and production-ready applications. Utilizes the App Router for server-side rendering, static site generation, and optimized routing.
- **React 19**: The core UI library, enabling component-based and reactive frontend development for a dynamic user interface.
- **Tailwind CSS v4**: A utility-first CSS framework for rapidly building custom designs directly in your markup, ensuring consistent and maintainable styling.
- **ShadCN UI**: A collection of beautifully designed, accessible, and customizable UI components built on top of Radix

### Intuitive Editor

- **Blocknote (`@blocknote/react`, `@blocknote/mantine`, `@blocknote/core`)**: A highly customizable and extensible block-based editor framework, integrated with Mantine for enhanced UI components, providing a rich content creation experience.

### Secure Authentication

- **Clerk (`@clerk/nextjs`)**: A robust and easy-to-implement user authentication and management solution, providing secure sign-up, sign-in, and user profile functionalities.

### Efficient State Management

- **Zustand (`zustand`)**: A small, fast, and scalable barebones state management solution, used for efficient client-side data flow.

### Scalable Backend & Database

- **Convex (`convex`)**: A fully managed backend platform offering a reactive database and serverless functions, enabling real-time data synchronization and scalable backend logic.

### Reliable Media Storage

- **EdgeStore (`@edgestore/react`, `@edgestore/server`)**: A performant and scalable storage solution optimized for edge delivery, ensuring fast and reliable media file uploads and retrieval.

### Enhancements & Interactions

- **`lucide-react`**: A collection of beautiful and customizable open-source icons, used throughout the UI for clear visual communication.
- **`cmdk`**: A command palette component, enabling keyboard-centric navigation and quick access to features.
- **`date-fns`**: A comprehensive utility library for working with dates and times.
- **`emoji-picker-react`**: Facilitates easy incorporation of emojis into notes.
- **`react-dropzone`**: Provides a user-friendly drag-and-drop interface for file uploads.
- **Animated UI**:
  - **Lenis (`lenis`)**: A lightweight JavaScript library for smooth and natural scrolling experiences.
  - **Motion (`motion`)**: A powerful and declarative animation library, likely used for complex UI transitions and orchestrations.
  - **`tw-animate-css`**: A Tailwind CSS plugin for easy integration of CSS animations.
  - **`vaul`**: A primitive for building delightful and accessible dialogs and drawers.
  - **`sonner`**: An opinionated toast component for React.

### Utility & Forms

- **`class-variance-authority` & `clsx`**: Utilities for composing CSS classes conditionally and with variants, enhancing Tailwind CSS usage.
- **`react-hook-form` & `@hookform/resolvers`**: Robust libraries for form validation and management, integrated with Zod for schema validation.
- **`zod`**: A TypeScript-first schema declaration and validation library, ensuring data integrity.
- **`usehooks-ts`**: A collection of useful React hooks.
- **`react-textarea-autosize`**: A component that automatically adjusts the height of a textarea.
- **`react-resizable-panels`**: Components for creating resizable panel layouts.
- **`react-day-picker`**: A flexible and accessible date picker component.

## Key Features

Ethereal Notes is designed with a focus on user experience and powerful functionality:

- **Flexible Block-Based Editor**: Create rich and structured notes using a variety of content blocks powered by Blocknote, offering a highly intuitive and Notion-like editing experience.
- **Seamless User Authentication**: Secure account management, sign-up, and sign-in functionalities are seamlessly handled by Clerk, ensuring your notes are always protected.
- **Real-Time Collaboration & Data Persistence**: Instant synchronization of notes across all your devices is achieved through Convex's reactive database and serverless functions, enabling real-time updates and reliable data storage.
- **Effortless Media Management**: Easily upload and manage media files directly within your notes using the integrated Dropzone for drag-and-drop functionality and EdgeStore for performant cloud storage.
- **Personalized User Interface**: Customize your note-taking environment with various themes, including a comfortable dark mode, ensuring a pleasant visual experience tailored to your preference.
- **Blazing-Fast Navigation**: Leverage the CMDK-powered command palette for keyboard-centric access to features, enabling quick search, navigation, and command execution without leaving your keyboard.
- **Dynamic Animations**: Enjoy a smooth and engaging user experience thanks to carefully implemented animations using Lenis for fluid scrolling and Framer Motion for dynamic UI transitions.

## Architecture

Ethereal Notes follows a well-structured architecture for maintainability, scalability, and clear separation of concerns:

- **`app/` (Next.js App Router)**: Contains all application routes, layouts, and page components, leveraging Next.js's powerful file-system based routing.
- **`components/editor/`**: Houses modular React components specifically designed for the Blocknote editor, ensuring a clear separation of concerns for the note-taking interface.
- **`state/`**: Manages client-side state using Zustand, providing a centralized and efficient way to handle application data.
- **`convex/`**: Contains all backend functions, including reactive queries, mutations, and server-side logic powered by Convex.
- **`lib/edgestore.ts`**: Defines the integration logic and utility functions for EdgeStore file handling, abstracting away the complexities of media storage.
- **`components/ui/`**: Stores reusable UI components built with ShadCN UI and Tailwind CSS, promoting consistency and reusability across the application.
- **`styles/`**: Includes global CSS files and the Tailwind CSS configuration, managing the application's overall styling.
- **`public/`**: Stores static assets such as images and fonts, accessible directly by the browser.

## Development Tools & Practices

Ethereal Notes embraces modern development practices to ensure code quality, consistency, and an efficient development workflow:

- **Linting**: Utilizes ESLint (`eslint`, `@eslint/eslintrc`, `eslint-config-next`) with a Next.js-specific configuration to enforce code style, identify potential errors, and maintain code quality.
- **Type Checking**: Thoroughly type-checked with TypeScript (`typescript`, `@types/node`, `@types/react`, `@types/react-dom`) for improved code maintainability, reduced bugs, and enhanced developer experience by catching type-related issues at development time.
- **Formatting**: While not explicitly enforced by a dev dependency, Prettier is highly recommended for consistent code formatting across the project, ensuring readability and reducing merge conflicts.
- **Turbopack**: Leveraged during development (`next dev --turbopack`) for incredibly fast hot module reloading and build times, significantly improving developer productivity.
