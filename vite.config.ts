import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// SSL certificate
import mkcert from 'vite-plugin-mkcert'
// https://vitejs.dev/config/
export default defineConfig({
    server: { https: true },
    plugins: [vue(), mkcert()],
    optimizeDeps: {
        exclude: ["oh-vue-icons/icons"]
      }
})
