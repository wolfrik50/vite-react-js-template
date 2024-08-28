import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        port: 3000,
        strictPort: true,
        proxy: {
            '/webapi': {
                target: 'http://127.0.0.1:8080/api',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/webapi/, '')
            }
        }
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        copyPublicDir: true
    },
    preview: {
        port: 3030,
        strictPort: true
    },
    plugins: [react()]
});
