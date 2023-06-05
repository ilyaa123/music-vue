<script setup lang="ts">
    import { Album } from "~/types/album";
    interface Props {
        album: Album
    }
    const props = defineProps<Props>()

    const router = useRouter();
</script>
<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
            <v-card color="primary" v-bind="props" @click="router.push('/app/albums/' + album.id)">
                <v-img
                    :src="album.image" 
                    class="text-white image"
                    transition="fade-transition" 
                    cover 
                    aspect-ratio="1"
                    :gradient="isHovering ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)'"
                >
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-btn v-show="isHovering" color="secondary" icon="mdi-play" />
                    </v-row>
                </v-img>
                <v-card-title>{{ album.name }}</v-card-title>
            </v-card>
        </template>
    </v-hover>
</template>
<style lang="scss" scoped>
    .image {
        transition: all 0.36s easy-in-out;
    }
</style>