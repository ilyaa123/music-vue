<script setup lang="ts">
    import { AlbumOrder } from '~/api/albums/types';
</script>
<template>
    <div>
        <AlbumsList limit="5" title="Популярное за последнюю неделю" :order="AlbumOrder.popularity_week" />
    </div>
</template>