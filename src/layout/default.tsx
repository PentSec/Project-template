import { Footer, Nav } from '@/components'
import Content from '@/routes/Routes'
import { useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
  const isErrorRoute = location.pathname === '/404'
  
  return (
    <div className="bg-backgrounds-main relative z-2 grid min-h-screen grid-rows-[auto_1fr_auto] w-screen">
      <div className="bg-backgrounds-main-shadows" />
      <Nav />
      <main className="container mx-auto max-w-7xl px-6 grow pt-16">
        <Content />
      </main>
      <footer className="bottom-0 left-0 right-0 p-2 dark:bg-black/80 text-muted-foreground shadow-2xl bg-muted/50 border-t border-white/5">
        {!isErrorRoute && <Footer />}
      </footer>
    </div>
  )
}
