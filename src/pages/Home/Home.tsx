import { Header } from '@/components'
import { Image } from "@heroui/react"
import { useFetch } from '@/context/FetchContext'

export default function Home() {
    const { data, isPending, error } = useFetch() // Consumo del contexto

    return (
        <section className="layer">
            <Header />
            {isPending ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : data.length > 0 ? (
                <Image src={data[0].url} alt="Random Cat" className="object-cover w-full h-full" />
            ) : (
                <p>No image available</p>
            )}
        </section>
    )
}
