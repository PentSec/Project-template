import { siteConfig } from '@/config/dirConfig'
import { DiscordIcon, GithubIcon, TwitterIcon } from '@/assets/Icons'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-8 pt-16 md:px-12 lg:px-8">
      <div className="mt-8 xl:grid xl:grid-cols-3 xl:gap-8">
        {/* Brand column */}
        <div className="space-y-4 md:pr-8">
          <h2 className="text-xl font-bold">{siteConfig.name}</h2>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Template for your next project. Built with React, Vite, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <DiscordIcon className="text-muted-foreground" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon className="h-5 w-5 text-muted-foreground" />
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
              <GithubIcon className="h-5 w-5 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div className="mt-8 xl:mt-0">
          <h3 className="text-sm font-semibold text-muted-foreground">Pages</h3>
          <ul className="mt-4 space-y-3">
            {siteConfig.navMenuItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="mt-8 xl:mt-0">
          <h3 className="text-sm font-semibold text-muted-foreground">Resources</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</a>
            </li>
            <li>
              <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Discord</a>
            </li>
            <li>
              <a href={siteConfig.links.issues} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Report an Issue</a>
            </li>
            <li>
              <a href={siteConfig.links.sponsor} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sponsor</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
