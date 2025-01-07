import { useQuery } from '@tanstack/react-query'
import { FC, ReactNode, useContext, createContext } from 'react'

const jsonURL =
    'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

interface StringItems {
    id: number
    url: string
    width: number
    height: number
}

interface FetchData {
    data: StringItems[]
    isPending: boolean
    error: string | null
}

const FetchContext = createContext<FetchData | undefined>(undefined)

export const useFetch = (): FetchData => {
    const context = useContext(FetchContext)
    if (!context) {
        throw new Error('useFetch must be used within a FetchProvider')
    }
    return context
}

const fetchData = (url: string) => {
    return fetch(url).then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch')
        }
        return res.json()
    })
}

export const FetchProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['fetch'],
        queryFn: () => fetchData(jsonURL)
    })

    return (
        <FetchContext.Provider
            value={{
                data: data || [],
                isPending: isLoading,
                error: isError ? (error as Error).message : null
            }}
        >
            {children}
        </FetchContext.Provider>
    )
}
