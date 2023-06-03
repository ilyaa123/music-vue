import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware( async (to) => {
    if (process.server){
        const nuxtApp = useNuxtApp();
        const store = useAuthStore();
        const host = nuxtApp.ssrContext?.event.node.req.headers.host;
        const code = to.query.code?.toString()
        const isAuthentificated = store.isAuthentificated;
        if (!isAuthentificated && code) {
            await useFetch('/api/auth', {
                method: 'POST',
                body: {
                    code: code, 
                    redirect_uri: 'http://' + host || 'http://localhost:3000'
                }
            })
            // await store.signIn({ code: code, redirect_uri: 'http://' + host || 'http://localhost:3000' });
        } 
        
    }
})