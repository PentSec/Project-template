import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/utils/QueryClient'
import '@/assets/css/main.css'
import Layout from '@/layout/default'
import { Provider } from './Provider'
import { FetchProvider } from '@/context/FetchContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Provider>
                <FetchProvider>
                    <Layout />
                </FetchProvider>
            </Provider>
        </QueryClientProvider>
    </BrowserRouter>
)
