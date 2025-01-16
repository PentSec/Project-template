import { HeroUIProvider } from "@heroui/react"
import { ReactNode } from 'react'
import { useHref, useNavigate } from 'react-router-dom'

export function Provider({ children }: { children: ReactNode }) {
    const navigate = useNavigate()

    return (
        <HeroUIProvider navigate={navigate} useHref={useHref} className="bg-backgrounds-main">
            <div className="bg-backgrounds-main-shadows" />
            {children}
        </HeroUIProvider>
    )
}
