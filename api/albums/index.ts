import { Album } from "~/types/album";
import { instanse } from "..";
import { getAlbumsData } from "./types";

export const getAlbumsApi = (data: getAlbumsData) => instanse.get<{results: Album[]}>('albums', {
    params: data
})