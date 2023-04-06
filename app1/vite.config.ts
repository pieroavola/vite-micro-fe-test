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
            name: 'app1',
            filename: 'remoteEntry.js',
            exposes: {
                './App1': './src/App1.tsx',
            },
            shared: ['react', 'react-dom', 'jotai', 'shared', 'react-router-dom']
        }),
    ],
})
