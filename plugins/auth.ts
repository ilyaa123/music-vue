import { useAuthStore } from "~/store/authStore";


export default defineNuxtPlugin({
    name: 'auth-plugin',
    async setup (nuxtApp) {
        
    },
    hooks:{
        'app:created'(){
            const nuxtApp = useNuxtApp();
            const access = useCookie('access_token');
            const store = useAuthStore();
            store.setIsAuth();
        },
    }
})