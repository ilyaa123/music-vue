export enum AlbumOrder {
    name = 'name',
    id ='id',
    releasedate ='releasedate',
    artist_id = 'artist_id',
    artist_name = 'artist_name',
    popularity_total = 'popularity_total',
    popularity_month = 'popularity_month',
    popularity_week = 'popularity_week'
};

type Imagesize  = '25' | '35' | '50' | '55' | '60' | '65' | '70' | '75' | '85' | '100' | '130' | '150' | '200' | '300' | '400' | '500' | '600';


export type getAlbumsData = {
    client_id: string,
    format: 'xml' | 'json' | 'jsonpretty',
    offset?: number,
    limit?: string,
    order?: AlbumOrder,
    fullcount?: boolean,
    id?: number,
    name?: string,
    namesearch?: string,
    artist_id?: string,
    artist_name?: string,
    datebetween?: string,
    imagesize?: Imagesize,
    audioformat?: 'mp32'
}