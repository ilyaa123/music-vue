import axios from "axios";

export const instanse = axios.create({
    baseURL: process.env.NUXT_BASE_URL_API,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});