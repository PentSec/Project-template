import { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Chip,
    Divider,
    Avatar
} from '@nextui-org/react'

import { DiscordIcon, GithubIcon, TwitterIcon } from '@/assets/Icons'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '@/config/dirConfit'
import { ThemeSwitch } from '@/components'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    return (
        <div className="flex flex-row flex-nowrap justify-center sticky top-0 z-40">
            <Navbar
                shouldHideOnScroll
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className="w-full max-w-[1080px] h-full rounded-full border-small dark:border-primary-200/40 dark:bg-background/60 shadow-medium backdrop-blur-md mt-2"
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="sm:hidden"
                    />
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <Link
                            color="foreground"
                            className="flex items-center justify-start"
                            href="/home"
                        >
                            <Avatar
                                src="/logo.svg"
                                alt="Maddons logo"
                                className="w-8 h-8 object-contain bg-transparent"
                            />
                            <p className="text-tiny ml-0 mr-1 font-bold uppercase text-inherit md:text-base">
                                addon Manager
                            </p>
                            <Chip
                                color="primary"
                                variant="flat"
                                size="sm"
                                className="hidden sm:flex"
                            >
                                on Dev👩🏽‍💻
                            </Chip>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarItem key={`${item.href}-${index}`}>
                            <Link
                                color={location.pathname === item.href ? 'primary' : 'foreground'}
                                href={item.href}
                                className={`${
                                    location.pathname === item.href
                                        ? 'text-default-400 font-semibold'
                                        : ''
                                }`}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className=" gap-2 flex">
                        <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                            <DiscordIcon className="text-default-500" />
                        </Link>
                        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                            <TwitterIcon className="w-5 h-5 text-default-500" />
                        </Link>
                        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                            <GithubIcon className="w-5 h-5 text-default-500" />
                        </Link>
                        <Divider orientation="vertical" className="h-auto mr-4 ml-2" />
                        <ThemeSwitch />
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="top-[calc(var(--navbar-height)/2)] mx-auto mt-9 max-h-[40vh] max-w-[80vw] rounded-large border-small border-primary-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={location.pathname === item.href ? 'primary' : 'foreground'}
                                className={`${
                                    location.pathname === item.href
                                        ? 'text-default-500 font-medium'
                                        : ''
                                }`}
                                href={item.href}
                                size="lg"
                                onPress={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    )
}
