import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'
import { useHref, useNavigate } from 'react-router-dom'

export function Provider({ children }: { children: ReactNode }) {
    const navigate = useNavigate()

    return (
        <NextUIProvider navigate={navigate} useHref={useHref} className="bg-backgrounds-main">
            <div className="bg-backgrounds-main-shadows" />
            {children}
        </NextUIProvider>
    )
}
