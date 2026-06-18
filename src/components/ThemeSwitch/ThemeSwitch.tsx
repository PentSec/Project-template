import { MoonIcon, SunIcon } from '@/assets/Icons'
import { useEffect, useState } from 'react'

const ThemeSwitch = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme')
            if (saved) return saved === 'dark'
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}

export default ThemeSwitch
