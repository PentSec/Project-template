import { DiscordIcon, GithubIcon, TwitterIcon } from '@/assets/Icons'
import { siteConfig } from '@/config/dirConfit'
import { Chip, Link } from '@nextui-org/react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pb-8 pt-16 md:px-12 lg:px-8">
            <div className="mt-8 text-center xl:grid xl:grid-cols-2 xl:gap-8">
                <div className="space-y-8 md:pr-8  ">
                    <div className="flex flex-col items-start justify-start">
                        <h2 className="text-xl font-bold">
                            {siteConfig.name}
                            <Chip className="ml-2" size="sm" color="primary" variant="flat">
                                Dev
                            </Chip>
                        </h2>
                        <p className="mt-8">© {currentYear} Template for your next project</p>
                        <div className="flex space-x-6 mt-8">
                            <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                                <DiscordIcon className="text-default-500" />
                            </Link>
                            <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                                <TwitterIcon className="w-5 h-5 text-default-500" />
                            </Link>
                            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                                <GithubIcon className="w-5 h-5 text-default-500" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 sm:grid sm:grid-cols-3 sm:gap-8 lg:w-auto lg:text-right xl:mt-0">
                    <div>
                        <h3 className="text-small font-semibold text-default-600">Pages</h3>
                        <ul className="mt-4 space-y-3 sm:mt-6 md:space-y-4">
                            {siteConfig.navMenuItems.map((item, index) => (
                                <li key={`${item}-${index}`}>
                                    <Link
                                        color="foreground"
                                        className="outline-none text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                        href={item.href}
                                        onPress={() =>
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                        }
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-small font-semibold text-default-600">Pages</h3>
                        <ul className="mt-4 space-y-3 sm:mt-6 md:space-y-4">
                            {siteConfig.navMenuItems.map((item, index) => (
                                <li key={`${item}-${index}`}>
                                    <Link
                                        color="foreground"
                                        className="outline-none text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-small font-semibold text-default-600">Pages</h3>
                        <ul className="mt-4 space-y-3 sm:mt-6 md:space-y-4">
                            {siteConfig.navMenuItems.map((item, index) => (
                                <li key={`${item}-${index}`}>
                                    <Link
                                        color="foreground"
                                        className="outline-none text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
