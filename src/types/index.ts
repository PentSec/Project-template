import type { SVGProps } from 'react'

export type IconSvgProps = Omit<SVGProps<SVGSVGElement>, 'onAnimationStart'> & {
    size?: number
}
