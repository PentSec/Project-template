import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { Home, About, Blog, Docs } from '@/pages'
import { RoutesNotFound } from '@/components'
import { AnimatePresence, motion } from 'framer-motion'
import { useSEO } from '@/hooks/useSEO'

const Content = () => {
    useSEO()
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.1 }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Docs" element={<Docs />} />
                    <Route path="/404" element={<RoutesNotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    )
}

export default Content
