<script lang="ts" setup>
    import { AlbumOrder } from "~/api/albums/types";
    import { useAlbumStore } from "~/store/albumStore";

    const store = useAlbumStore();

    const props = defineProps({
        limit: {
            type: String,
            default: () => '20'
        },
        title: {
            type: String,
            default: () => 'Последнее'
        },
        order: {
            type: String,
            default: () => ''
        }
    })
    
    const { data, pending, error, refresh } = await useAsyncData('albums',() => useFetch('/api/albums/getAlbumsList', {
        method: 'GET',
        params: {
            limit: props.limit,
            order: props.order
        }
    }))
    const albums = computed(() => {
        return data.value?.data || []
    })
    console.log('data', albums.value)
</script>
<template>
    <div class="mb-6">
        <v-toolbar color="surface">
            <v-toolbar-title>{{ props.title }}</v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col 
                cols="2"
                v-for="(album, index) in albums"
                :key="index"
            >
                <albums-card :album="album" />
            </v-col>
        </v-row>
    </div>
</template>