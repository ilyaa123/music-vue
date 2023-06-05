import axios from "axios";

const baseUrl = () => {
    if (process.client && process.connected){
        return useRuntimeConfig().public.baseUrlApi
    } else {
        return process.env.NUXT_BASE_URL_API
    }
}
export const instanse = axios.create({
    baseURL: baseUrl(),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

export const token = () => {
    if (process.client){
        const token = useCookie('access_token');
        return token
    } else if (process.server){
        const token = useCookie('access_token');
        return token
    }
    
}