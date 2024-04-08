const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

module.exports = defineConfig({
  plugins: [vue()],
  server: {
    port: 3001, // ou tout autre port de votre choix
  },
});
