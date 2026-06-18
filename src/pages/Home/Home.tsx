import { Header } from '@/components'
import { useCatImage } from '@/context/FetchContext'

export default function Home() {
  const { data, isPending, error } = useCatImage()

  return (
    <section className="layer">
      <Header />
      {isPending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data && data.length > 0 ? (
        <img src={data[0].url} alt="Random Cat" className="object-cover w-full h-full" />
      ) : (
        <p>No image available</p>
      )}
    </section>
  )
}
