import {defineConfig} from "vite";
import {resolve} from "path";
import react from '@vitejs/plugin-react'
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
    build: {
        target: 'esnext',
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "shared",
            fileName: "shared",
        },
        rollupOptions: {
            external: ["react", "react-dom", "jotai"],
        },
    },
    plugins: [
        dtsPlugin(),
        react(),
    ],
})
