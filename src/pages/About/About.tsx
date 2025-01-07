import Layout from '@/layout/default'
import { Image } from '@nextui-org/react'

export default function About() {
    return (
        <Layout>
            <section className="layer">
                <h1>About</h1>
                <Image src="/logo.svg" alt="google logo" />
            </section>
        </Layout>
    )
}
