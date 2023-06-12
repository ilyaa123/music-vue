import { defineStore } from "pinia";

import { getUserApi } from "~/api/user";
import { getUserData } from "~/api/user/types";

import axios from "axios";

import { User } from "~/types/user";

interface IInitialState {
    user: Partial<User>
}

const initialState: IInitialState = {
    user: {}
}

export const useUserStore = defineStore('user',{
    state: () => ({...initialState}),
    getters: {
        getCurrentUser: (state) => state.user
    },
    actions: {
        async getUser(payload: getUserData){
            try {
                const res = await getUserApi(payload)
                this.user = res.data.results[0]   
            } catch (error) {
                if (axios.isAxiosError(error)){
                    
                }                
            }
        }
    }
})