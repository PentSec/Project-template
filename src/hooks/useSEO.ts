import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '@/config/dirConfig'

export function useSEO() {
    const location = useLocation()

    useEffect(() => {
        const currentPath = location.pathname

        const navItem = siteConfig.navItems.find((item) => item.href === currentPath)

        if (navItem) {
            const title = `${siteConfig.name} - ${navItem.label}`
            document.title = title
            const description = siteConfig.descriptionMeta
            document.querySelector('meta[name="description"]')?.setAttribute('content', description)
        }
    }, [location.pathname])
}
