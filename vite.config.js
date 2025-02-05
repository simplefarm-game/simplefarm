import { defineConfig } from 'vite'

// https://vitejs.dev/config/

export default defineConfig({
    build: {
        outDir: 'docs', // Diretório de saída para GitHub Pages
    },
    base: '/simplefarm/', // Ajuste o nome do repositório no GitHub
})