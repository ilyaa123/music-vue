<script setup lang="ts">
    import { AlbumOrder } from '~/api/albums/types';
</script>
<template>
    <div>
        <h1 class="ma-0 pa-0 text-h4">Альбомы</h1>
        <AlbumsList limit="5" title="Недавно добавлено" :order="AlbumOrder.releasedate" />
        <AlbumsList limit="5" title="Популярное за последний месяц" :order="AlbumOrder.popularity_month" />
    </div>
</template>