# Overview

This is a personal portfolio website for Rajesh Chouhan, a Computer Science Engineering graduate. The application is built as a modern full-stack web application showcasing professional experience, skills, projects, and providing a contact form for potential employers or collaborators. The portfolio features a sleek, dark-themed design with smooth animations and responsive layout.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Session Storage**: Memory-based storage with fallback to PostgreSQL session store
- **API Design**: RESTful endpoints with JSON responses and proper error handling

## Data Storage
- **Primary Database**: PostgreSQL with Drizzle ORM schema definitions
- **Schema**: Shared TypeScript schemas between client and server using Zod for validation
- **Tables**: Users table for potential authentication, contact_messages table for form submissions
- **Development Storage**: In-memory storage implementation for rapid development
- **Production Storage**: PostgreSQL with connection pooling via Neon Database

## Component Structure
- **Layout**: Single-page application with smooth scrolling navigation
- **Sections**: Modular components for Hero, About, Skills, Projects, Experience, and Contact
- **UI Components**: Reusable Shadcn/ui components for buttons, forms, cards, toasts, and animations
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animation System**: Intersection Observer API for scroll-triggered animations with Framer Motion

# External Dependencies

- **Database Provider**: Neon Database (PostgreSQL serverless) via @neondatabase/serverless
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Icon Library**: Lucide React for consistent iconography and React Icons for technology logos
- **Font Loading**: Google Fonts integration (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Development Tools**: Vite for bundling, ESBuild for server compilation, tsx for TypeScript execution
- **Validation**: Zod for schema validation across client and server
- **Animation**: Framer Motion for complex animations and transitions
- **Form Management**: React Hook Form with Hookform Resolvers for Zod integration
- **State Management**: TanStack Query for server state and caching
- **Development Environment**: Replit-specific plugins for cartographer and runtime error handling