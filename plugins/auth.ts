import { useAuthStore } from "~/store/authStore";
import { useUserStore } from "~/store/userStore";


export default defineNuxtPlugin({
    name: 'auth-plugin',
    async setup (nuxtApp) {
        
    },
    hooks:{
        async 'app:created'(){
            const nuxtApp = useNuxtApp();
            const access = useCookie('access_token');
            const authStore = useAuthStore();
            const userStore = useUserStore();
            if (access.value){
                const client_id = process.env.NUXT_CLIENT_ID
                authStore.setIsAuth();
                await userStore.getUser({
                    client_id: client_id || '13b949df',
                    access_token: access.value,
                    imagesize: '100'
                })
                nuxtApp.$router.push('/app')
            }
        },
    }
})