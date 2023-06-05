import { defineStore } from "pinia";
import { AlbumInitialState } from "./types";
import { getAlbumsData } from "~/api/albums/types";
import { getAlbumsApi } from "~/api/albums";

const initialState: AlbumInitialState = {
    albumList: [],
    isLoading: false
}

export const useAlbumStore = defineStore('album', {
    state: () => (initialState),
    getters: {
        getAlbumList: (state) => state.albumList,
        getIsLoading: (state) => state.isLoading 
    },
    actions: {
        async getAlbums(payload: getAlbumsData){
            try {
                const res = await getAlbumsApi(payload)
                console.log('res: ', res.data.results);
                this.albumList = res.data.results
                
            } catch (error) {
                
            }
        }
    }
})