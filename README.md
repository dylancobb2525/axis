# AXIS Medical Education Landing Page

A modern, responsive landing page for AXIS Medical Education, built with Next.js and TypeScript.

## Features

- Clean, professional design matching AXIS branding
- Responsive layout for all device sizes
- Interactive modals for activities and booking
- Animated counter for provider statistics
- Modern UI components with smooth animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── ActivityModal.tsx
│   │   ├── BookNowModal.tsx
│   │   ├── BookActivityModal.tsx
│   │   ├── AskQuestionModal.tsx
│   │   └── AnimatedCounter.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
└── ...
```

## Build and Deploy

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```