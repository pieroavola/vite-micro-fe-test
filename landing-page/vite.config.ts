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
                app1: "http://localhost:5001/assets/remoteEntry.js",
                app2: "http://localhost:5002/assets/remoteEntry.js",
            },
            shared: ["react", "react-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
    },
    resolve: {
        dedupe: ["react", "react-dom"]
    }
})
