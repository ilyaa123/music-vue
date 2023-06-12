<script lang="ts" setup>
    import { AlbumOrder } from '~/api/albums/types';
    import { Album } from "~/types/album";

    interface Props {
        limit: string;
        title: string;
        order: AlbumOrder
    }

    const props = defineProps<Props>()
    
    const { data, pending, error, refresh } = await useAsyncData('albums', async () => await useFetch<Album[]>('/api/albums/getAlbumsList', {
        method: 'GET',
        params: {
            limit: props.limit,
            order: props.order
        }
    }))
    const albums = computed(() => {
        return data.value?.data.value || []
    })
</script>
<template>
    <div class="mb-6">
        <v-toolbar color="surface" >
            <v-toolbar-title>{{ props.title }}</v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col 
                cols="2"
                v-for="(album, index) in albums"
                :key="index"
            >
                <AlbumsCard :album="album" />
            </v-col>
        </v-row>
    </div>
</template>