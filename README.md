<div align="center">

# React Project Template

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

A simple, customizable template built with **React**, **HeroUI**, and **Tailwind CSS**. This template is designed to be a starting point for your projects, featuring built-in **React Query** for efficient data fetching and state management. The project uses **pnpm** for package management.

![Project-Template](https://github.com/user-attachments/assets/3c32269d-f624-4ae5-bc5d-9b0b7f005abc)


</div>

## Features

-   **React**: A modern library for building user interfaces.
-   **HeroUI**: A beautiful and fully accessible component library.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **React Query**: Simplified data fetching and caching.
-   Pre-configured to use `fetch` for API calls.
-   Ready-to-use folder structure for scalable project organization.
-   Linter preconfigured with **ESLint** and **Prettier**.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/PentSec/Project-template.git
    cd Project-template
    ```

2. Install dependencies using `pnpm`:

    ```bash
    pnpm install
    ```

## Usage

1. Start the development server:

    ```bash
    pnpm run dev
    ```

    The app will be available at [http://localhost:5173](http://localhost:5173).

2. Build for production:

    ```bash
    pnpm run build
    pnpm start
    ```

## File Structure

```plaintext
├── public/            # Static files (e.g., images, icons)
├── src/
│   ├── assets/        # Custom icons, images, etc.
│   ├── components/    # Reusable UI components
│   ├── context/       # React Context for global state
|   ├── config/        # Site configuration
│   ├── hooks/         # Custom hooks (e.g., for API calls)
│   ├── layout/        # Layout components (e.g., Header, Footer)
│   ├── pages/         # React pages structure
│   ├── routes/        # Routes with react-router-dom
|   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
├── package.json       # Project configuration and dependencies
```

## API Integration

The template uses **React Query** for API calls and caching. The default API example fetches random cat images from [The Cat API](https://thecatapi.com/):

```typescript
return fetch(url).then((response) => response.json())
```

You can replace this API with your own by editing the configuration in the context or hook files.

## 👩🏽‍💻 Author

<a href="https://github.com/pentsec">
   <img width="50px" src="https://avatars.githubusercontent.com/u/11955573?v=4" />
</a>

## 🛠️ Stack

-   "@HeroUI-org/react": `"^2.6.11"`,
-   "@HeroUI-org/use-infinite-scroll": `"^2.2.2"`,
-   "@HeroUI-org/use-theme": `"^2.1.1"`,
-   "@tailwindcss/typography": `"^0.5.15"`,
-   "@tanstack/react-query": `"^5.62.16"`,
-   "framer-motion": `"^11.16.0"`,
-   "react": `"^19.0.0"`,
-   "react-dom": `"^19.0.0"`,
-   "react-router-dom": `"^7.1.1"`,
-   "tailwind-variants": `"^0.3.0"`,
-   "use-dark-mode": `"^2.3.1"`

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
