import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { siteConfig } from '@/config/dirConfig'
import { ThemeSwitch } from '@/components'
import { DiscordIcon, GithubIcon, TwitterIcon } from '@/assets/Icons'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Nav() {
  const location = useLocation()

  return (
    <div className="sticky top-0 z-40 flex w-full justify-center">
      <div className="flex w-full max-w-[1080px] items-center justify-between rounded-full border bg-background/80 px-4 py-2 shadow-md backdrop-blur-md mt-2">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link to="/home" className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarImage src="/logo.svg" alt="Project-template logo" className="bg-transparent" />
            </Avatar>
            <span className="text-sm font-bold uppercase md:text-base">
              Project Template
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              on Dev
            </Badge>
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList className="gap-1">
            {siteConfig.navItems.map((item, index) => (
              <NavigationMenuItem key={`${item.href}-${index}`}>
                <NavigationMenuLink
                  href={item.href}
                  className={`${navigationMenuTriggerStyle()} ${
                    location.pathname === item.href
                      ? 'font-semibold text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Socials + ThemeSwitch + Mobile hamburger */}
        <div className="flex items-center gap-2">
          {/* Desktop: social icons */}
          <div className="hidden items-center gap-2 sm:flex">
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <DiscordIcon className="text-muted-foreground" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon className="h-5 w-5 text-muted-foreground" />
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
              <GithubIcon className="h-5 w-5 text-muted-foreground" />
            </a>
            <Separator orientation="vertical" className="ml-2 mr-4 h-auto" />
          </div>
          <ThemeSwitch />

          {/* Mobile: hamburger */}
          <Sheet>
            <SheetTrigger asChild className="sm:hidden">
              <button type="button" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-sm">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {siteConfig.navMenuItems.map((item, index) => (
                  <Link
                    key={`${item}-${index}`}
                    to={item.href}
                    className={`rounded-lg px-4 py-3 text-base transition-colors hover:bg-muted ${
                      location.pathname === item.href
                        ? 'font-medium text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
