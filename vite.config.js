const { appConfig } = require('./package.json')
const viteMainJs = require('vite-main-js')
const tailwind = require('tailwindcss')
const postcssImport = require('postcss-import')
const autoPreprocess = require('svelte-preprocess')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const { port } = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
  server: {
    port: port,
  },
  build: {
    cssCodeSplit: false,
    polyfillDynamicImport: false
  },
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    dedupe: ['@roxi/routify'],
  },
  plugins: [
    viteMainJs(),
    svelte({
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [
              tailwind("./tailwind.config.cjs"),
              postcssImport,
            ],
          },
        }),
      ],
      emitCss: true,
      hot: !production,
    }),
  ],
}
