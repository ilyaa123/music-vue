// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    experimental: {
        componentIslands: false
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Music'
        }
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify', 'three'],
    },
    modules: [
        '@pinia/nuxt'
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    runtimeConfig: {
        public: {
            baseUrlApi: process.env.NUXT_BASE_URL_API,
            client_id: process.env.NUXT_CLIENT_ID
        },
        
    }
})
