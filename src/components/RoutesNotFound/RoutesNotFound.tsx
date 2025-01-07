import Layout from '@/layout/default'
import { Link } from 'react-router-dom'

const RoutesNotFound = () => {
    return (
        <Layout>
            <div className="w-full h-full m-0 bg-gradient-radial from-[#240015] to-[#12000b] overflow-hidden animate-hue-rotate">
                <h2 className="  mt-[150px] text-[32px] uppercase text-[#12000a] font-light font-[Audiowide] text-shadow-[0px_0px_4px_#12000a]  animate-[flicker4_5s_linear_7.5s_infinite,_hueRotate_6s_ease-in-out_3s_infinite]">
                    404 PAGE NOT FOUND
                </h2>

                <h2>
                    The page you are looking for might have been removed, had its name changed or is
                    temporarily unavailable.
                </h2>
                <h2>
                    Please try to go back or return to the <Link to="/home">homepage</Link>.
                </h2>
            </div>
        </Layout>
    )
}

export default RoutesNotFound
