import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware(async (to) => {
    if (process.server){
        const nuxtApp = useNuxtApp();
        const store = useAuthStore();
        const host = nuxtApp.ssrContext?.event.node.req.headers.host;
        const code = to.query.code?.toString()
        const isAuthentificated = store.isAuthentificated;
        if (!isAuthentificated && code) {
            const data = {
                code: code,
                redirect_uri: 'http://' + host || 'http://localhost:3000'
            }
            const res = await store.signIn(data)
            if (res?.access_token){
                const access = useCookie('access_token', {
                    maxAge: res.expires_in
                });
                access.value = res.access_token;
                const refresh = useCookie('refresh_token')
                refresh.value = res.refresh_token
                return navigateTo('/app')
            } else {
                abortNavigation()
            }
        } 
        
    }
})