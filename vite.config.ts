import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  server: {
    host: "0.0.0.0", //解决 vite use --host to expose
    port: 8080,
    open: true,
  },
  //配置别名
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  css: {
     preprocessorOptions: {
       less: {
          javascriptEnabled: true
      }
    }
  },
})
