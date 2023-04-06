import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "landing-page",
            remotes: {
                app1: "http://127.0.0.1:5001/assets/remoteEntry.js",
                app2: "http://127.0.0.1:5002/assets/remoteEntry.js",
            },
            shared: ["react", "react-dom", 'jotai', 'shared', "react-router-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
    },
    resolve: {
        dedupe: ["react", "react-dom", 'jotai']
    }
})
