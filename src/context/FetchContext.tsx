import { useQuery } from '@tanstack/react-query'

const CAT_API_URL =
  'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

interface CatImage {
  id: number
  url: string
  width: number
  height: number
}

export function useCatImage() {
  return useQuery<CatImage[]>({
    queryKey: ['cat-image'],
    queryFn: () => fetch(CAT_API_URL).then((res) => res.json()),
  })
}
