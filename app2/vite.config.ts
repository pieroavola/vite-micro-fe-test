import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    build: {
        target: 'esnext',
    },
    plugins: [
        react(),
        federation({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './App2': './src/App2.tsx',
            },
            shared: ['react', 'react-dom']
        }),
    ],
})
