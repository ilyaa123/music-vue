import { instanse } from "..";
import { LoginRes } from "./types";

export const Login = (data: {
    client_id: string, 
    client_secret: string, 
    code: string,
    redirect_uri: string,
    grant_type: string
}) => instanse.post<LoginRes>('oauth/grant', {...data,});
