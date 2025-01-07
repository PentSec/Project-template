import { Footer, Nav } from '@/components'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
    const location = useLocation()
    const isErrorRoute = location.pathname === '/404'
    return (
        <div className="dark:text-foreground dark:bg-background relative flex-grow mx-auto m-0 p-0 min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed dark:bg-maddons-bg bg-maddons-light h-screen">
            <header className="flex flex-row flex-nowrap items-center h-[var(--navbar-height)] px-0 justify-center sticky top-0 z-40 bg-transparent w-full gap-4">
                <Nav />
            </header>
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">{children}</main>
            <footer className="bottom-0 left-0 right-0 p-2 dark:bg-black/80 text-default-500 shadow-2xl bg-default-50/80 border-t-1 border-white/5">
                {!isErrorRoute && <Footer />}
            </footer>
        </div>
    )
}
