import { instanse, token } from "..";

import { User } from "~/types/user";
import { getUserData } from "./types";

export const getUserApi = (data: getUserData) => instanse.get<{results: User[]}>('users', {
    params: {
        ...data
    },
    // headers: {
    //     'Authorization': `bearer ${token()}`
    // }
})