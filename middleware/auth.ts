import { useStore } from "~/store";
import { ActionTypes } from '~/store/modules/auth/actions';

export default defineNuxtRouteMiddleware((to) => {
    if (process.server){
        const nuxtApp = useNuxtApp();
        const host = nuxtApp.ssrContext?.event.node.req.headers.host;
        const store = useStore();
        const code = to.query.code?.toString()
        if (code) store.dispatch(ActionTypes.AUTH__SIGNIN, {
            code: code,
            redirect_uri: 'http://' + host || 'http://localhost:3000'
        })
    }
})