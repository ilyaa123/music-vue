import { getAlbumsApi } from "~/api/albums";
import { AlbumOrder, getAlbumsData } from "~/api/albums/types";

export default defineEventHandler(async (event) => {
    const params = getQuery(event)
    const client_id = process.env.NUXT_CLIENT_ID!
    const response = await getAlbumsApi({
        client_id: client_id,
        format: 'json',
        order: (params.order as AlbumOrder),
        limit: (params.limit as string),
    })
    return {value: response.data.results}
})