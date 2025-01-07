import { useLocation } from 'react-router-dom'
import { title, subtitle } from '@/utils/primitives'
import { siteConfig } from '@/config/dirConfit'

const Header = () => {
    const location = useLocation()

    const currentNavItem = siteConfig.navItems.find(
        (item) => item.href.toLowerCase() === location.pathname.toLowerCase()
    )

    const pageTitle = currentNavItem ? currentNavItem.label : 'Page'

    return (
        <div>
            <h1 className={title({ color: 'blue', size: 'lg' })}>{pageTitle}</h1>
            <p className={subtitle()}>{siteConfig.description}</p>
        </div>
    )
}

export default Header
