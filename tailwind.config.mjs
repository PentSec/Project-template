import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
                serif: defaultTheme.fontFamily.serif,
                mono: defaultTheme.fontFamily.mono
            }
        }
    },
    plugins: [(await import('@tailwindcss/typography')).default]
}
