import { ThemeDefinition, createVuetify } from "vuetify/lib/framework.mjs"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#15202b",
        surface: "#273b4f",
        primary: "#03dac6",
        secondary: "#B5A33F",
        error: "#f44336",
        info: "#2196F3",
        success: "#4caf50",
        warning: "#fb8c00",
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme
            }
        }
    });
    nuxtApp.vueApp.use(vuetify)
})