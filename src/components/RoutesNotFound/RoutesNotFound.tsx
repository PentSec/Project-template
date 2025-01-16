import { Link, Button } from "@heroui/react"

const RoutesNotFound = () => {
    return (
        <div className="w-full h-full m-0 bg-gradient-radial from-[#240015] to-[#12000b] overflow-hidden animate-hue-rotate">
            <h2 className="text-4xl lg:text-9xl text-center justify-center mt-[150px] text-[32px] uppercase text-[#12000a] font-light font-[Audiowide] text-shadow-[0px_0px_4px_#12000a]  animate-[flicker4_5s_linear_7.5s_infinite,_hueRotate_6s_ease-in-out_3s_infinite]">
                404 PAGE NOT FOUND
            </h2>

            <h2 className="font-extrabold text-2xl lg:text-5xl">
                The page you are looking for might have been removed, had its name changed or is
                temporarily unavailable.
            </h2>
            <h2 className="mt-10">
                Please try to go back or return to the{' '}
                <Button as={Link} href="/home" size="lg" underline="always" color="primary">
                    HOME PAGE
                </Button>
            </h2>
        </div>
    )
}

export default RoutesNotFound
