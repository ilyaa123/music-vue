import { Album } from "~/types/album";

export interface AlbumInitialState {
    albumList: Album[],
    isLoading: boolean
}