import Layout from '@/layout/default'
import { Image } from '@nextui-org/react'

export default function Blog() {
    return (
        <Layout>
            <section className="layer">
                <h1>Blog</h1>
                <Image src="/logo.svg" alt="google logo" />
            </section>
        </Layout>
    )
}
