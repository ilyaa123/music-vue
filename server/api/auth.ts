import { useAuthStore } from "~/store/authStore";

export default defineEventHandler( async (event) => {
    const store = useAuthStore();
    const body = await readBody<{code: string | undefined, redirect_uri: string}>(event);
    console.log('body: ', body);
    if (!!body.code){
        const res = await store.signIn({code: body.code, redirect_uri: body.redirect_uri})
        console.log('res: ', res);
    }
})