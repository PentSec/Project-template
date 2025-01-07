import { IconSvgProps } from '@/types'
import { FC } from 'react'
import type { Variants } from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'

const bodyVariants: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        scale: [0.9, 1],
        transition: {
            duration: 0.4
        }
    }
}

export const TwitterIcon: FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
    const bodyControls = useAnimation()
    const tailControls = useAnimation()

    const handleMouseEnter = async () => {
        bodyControls.start('animate')
        await tailControls.start('draw')
        tailControls.start('wag')
    }

    const handleMouseLeave = () => {
        bodyControls.start('normal')
        tailControls.start('normal')
    }

    return (
        <div
            className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                height={size || height}
                width={size || width}
                {...props}
                fill="currentColor"
            >
                <motion.path
                    variants={bodyVariants}
                    initial="normal"
                    animate={bodyControls}
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
            </svg>
        </div>
    )
}
