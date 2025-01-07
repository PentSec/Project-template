import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    base: '/Project-template/',
    resolve: {
        alias: {
            '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src')
        }
    }
})
