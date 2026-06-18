<div align="center">

# React Project Template

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

A modern, clean starting point for React projects. Built with **React 19**, **Vite 8**, **TypeScript 6**, **Tailwind CSS v4**, and **shadcn/ui** on top of **Radix UI** primitives. Data fetching with **TanStack React Query**, routing with **React Router v7**, package management with **pnpm**.

![Project-Template](https://github.com/user-attachments/assets/3c32269d-f624-4ae5-bc5d-9b0b7f005abc)

</div>

## Features

-   **React 19** with **TypeScript 6** — strict mode, full type safety
-   **Vite 8** + **SWC** — fast HMR and production builds
-   **Tailwind CSS v4** — CSS-first configuration, no PostCSS needed
-   **shadcn/ui** — accessible, unstyled components via **Radix UI** primitives
-   **TanStack React Query** — server-state management with caching
-   **React Router v7** — client-side routing with basename support for GitHub Pages
-   **Framer Motion** — declarative animations and transitions
-   **Geist Variable** — single font system, no font conflicts
-   **ESLint** + **TypeScript** — preconfigured linting

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/PentSec/Project-template.git
    cd Project-template
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

## Usage

1. Start the development server:

    ```bash
    pnpm dev
    ```

    The app will be available at [http://localhost:5173](http://localhost:5173).

2. Build for production:

    ```bash
    pnpm build
    ```

3. Preview the production build:

    ```bash
    pnpm preview
    ```

## File Structure

```plaintext
├── public/                  # Static files
├── src/
│   ├── assets/              # Icons, CSS, images
│   │   ├── Icons/           # SVG icon components (animated variants)
│   │   └── css/             # Global styles (Tailwind entry point)
│   ├── components/          # UI and feature components
│   │   ├── Navbar/          # Top navigation bar
│   │   ├── Footer/          # Page footer
│   │   ├── Header/          # Page headers
│   │   ├── ThemeSwitch/     # Dark/light mode toggle
│   │   ├── RoutesNotFound/  # 404 page
│   │   └── ui/              # shadcn/ui primitives (avatar, badge, button, card, etc.)
│   ├── config/              # Site configuration (nav items, links, SEO metadata)
│   ├── hooks/               # Custom React hooks (useCatImage, useSEO)
│   ├── layout/              # Root layout (Nav + Content + Footer)
│   ├── lib/                 # Utility helpers (cn, tailwind-merge)
│   ├── pages/               # Route pages (Home, About, Blog, Docs)
│   ├── routes/              # React Router configuration
│   ├── types/               # Shared TypeScript types
│   └── utils/               # QueryClient, primitives, other utilities
├── package.json
└── pnpm-lock.yaml
```

## API Integration

The template uses **TanStack React Query** for server-state management. A simple example fetches random cat images from [The Cat API](https://thecatapi.com/):

```typescript
// hooks/useCatImage.ts
export function useCatImage() {
  return useQuery({
    queryKey: ['cat'],
    queryFn: () => fetch(url).then((res) => res.json()),
  })
}
```

The hook replaces the previous Context-based approach — React Query handles caching, deduplication, and stale management globally without any extra indirection.

## Deploy to GitHub Pages

The project is preconfigured for GitHub Pages deployment:

1. Push to your repository
2. Go to **Settings → Pages**
3. Source: **GitHub Actions**
4. Use the default Vite/static site workflow, or set up a custom workflow

The `basename` in `main.tsx` and `base` in `vite.config.ts` are already set to `/Project-template/` — update these if you rename the repo.

## Stack

| Dependency | Version |
|---|---|
| react | ^19.2.7 |
| react-dom | ^19.2.7 |
| react-router-dom | ^7.18.0 |
| vite | ^8.x |
| @vitejs/plugin-react-swc | ^4.x |
| typescript | ^6.x |
| tailwindcss | ^4.x |
| @tailwindcss/vite | ^4.x |
| @tanstack/react-query | ^5.x |
| framer-motion | ^12.x |
| radix-ui | ^1.6.0 |
| shadcn | ^2.x (dev) |
| class-variance-authority | latest |
| lucide-react | latest |
| Geist (fontsource) | latest |

## Author

<a href="https://github.com/pentsec">
   <img width="50px" src="https://avatars.githubusercontent.com/u/11955573?v=4" />
</a>

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements or bug fixes.

[![Contributors](https://contrib.rocks/image?repo=PentSec/Project-template)](https://github.com/PentSec/Project-template/graphs/contributors)

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

[contributors-shield]: https://img.shields.io/github/contributors/PentSec/Project-template.svg?style=for-the-badge
[contributors-url]: https://github.com/PentSec/Project-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PentSec/Project-template.svg?style=for-the-badge
[forks-url]: https://github.com/PentSec/Project-template/network/members
[stars-shield]: https://img.shields.io/github/stars/PentSec/Project-template.svg?style=for-the-badge
[stars-url]: https://github.com/PentSec/Project-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/PentSec/Project-template.svg?style=for-the-badge
[issues-url]: https://github.com/PentSec/Project-template/issues
