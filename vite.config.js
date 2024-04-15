const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')

module.exports = defineConfig({
  plugins: [vue()],
  server: {
    port: 3001 // peutetre remettre 3000 apres jsp
  }
})
