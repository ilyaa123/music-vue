import axios from "axios";
import { defineStore } from "pinia";
import { Login } from "~/api/auth";


export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isAuthentificated: false,
            authError: ''
        }  
    },
    getters: {
        getIsAuthentificated: (state) => state.isAuthentificated,
        getAuthError: (state) => state.authError
    },
    actions: {
        async signIn(payload: {code: string, redirect_uri: string}){
            try {
                const data = {
                    client_id: process.env.NUXT_CLIENT_ID!,
                    client_secret: process.env.NUXT_CLIENT_SECRET!,
                    code: payload.code,
                    redirect_uri: payload.redirect_uri,
                    grant_type: 'authorization_code'
                };
                const res = await Login(data);
                this.isAuthentificated = true
                return res.data
            } catch (error) {
                if (axios.isAxiosError(error)){
                    this.authError = 'Неверные логин или пароль'
                }
            }
        },
        setIsAuth(){
            this.isAuthentificated = true
        }
    }
})