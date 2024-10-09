import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: `/`, // Базовый путь, если не используется поддиректория
  build: {
    outDir: 'dist', // Эта директория совпадает с той, что указана в vercel.json
    emptyOutDir: true, // Это удаляет старую сборку перед созданием новой
  }
})
