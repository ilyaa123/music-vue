export type getUserData = {
    access_token: string;
    client_id: string;
    id?: number;
    format?: 'xml' | 'json' | 'jsonpretty';
    callback?: () => void;
    offset?: number;
    limit?: string;
    fullcount?: boolean;
    name?: string;
    imagesize?: '30' | '50' | '100'   
}