import { getAlbumsApi } from "~/api/albums";
import { AlbumOrder, getAlbumsData } from "~/api/albums/types";

export default defineEventHandler(async (event) => {
    const params = getQuery(event)
    const client_id = process.env.NUXT_CLIENT_ID!
    const response = await getAlbumsApi({
        client_id: client_id,
        format: 'jsonpretty',
        order: (params.order as AlbumOrder),
        limit: (params.limit as string),
        imagesize: '200'
    })
    return response.data.results
})