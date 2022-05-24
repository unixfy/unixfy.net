const {appConfig} = require('./package.json')
const viteMainJs = require('vite-main-js')
const tailwind = require('tailwindcss')
const postcssImport = require('postcss-import')
const autoPreprocess = require('svelte-preprocess')
const {svelte} = require('@sveltejs/vite-plugin-svelte')
const {VitePWA} = require("vite-plugin-pwa");
const {port} = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
    server: {
        port: port,
    },
    build: {
        cssCodeSplit: false,
        polyfillDynamicImport: false,
        polyfillModulePreload: false
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
        VitePWA({
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
            },
            registerType: "autoUpdate",
            base: "/",
            manifest: {
                "background_color": "#ffffff",
                "theme_color": "#7E1F86",
                "name": "Unixfy.net",
                "short_name": "Unixfy.net",
                "start_url": "/",
                "display": "standalone",
                "icons": [
                    {
                        "src": "/images/largeicon.png",
                        "sizes": "1000x1000",
                        "type": "image/png",
                        "purpose": "maskable any"
                    }
                ]
            }
        })
    ],
}
