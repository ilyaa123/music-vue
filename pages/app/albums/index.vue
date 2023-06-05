<script setup lang="ts">
    import { AlbumOrder } from '~/api/albums/types';
</script>
<template>
    <div>
        <albums-list limit="10" title="Недавно добавлено" :order="AlbumOrder.releasedate" />
        <albums-list limit="10" title="Популярное за последний месяц" :order="AlbumOrder.popularity_month" />
    </div>
</template>