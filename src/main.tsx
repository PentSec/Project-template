import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/utils/QueryClient'
import '@/assets/css/main.css'
import Layout from '@/layout/default'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename="/Project-template">
        <QueryClientProvider client={queryClient}>
            <Layout />
        </QueryClientProvider>
    </BrowserRouter>
)
