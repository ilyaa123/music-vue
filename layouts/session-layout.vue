<script setup lang="ts">

    const width = ref<number | undefined>(0)
    const col = ref<HTMLDivElement>();
    onMounted(() => {
        width.value = col.value?.clientWidth;
    })
    const onResize = () => {
        width.value = col.value?.clientWidth;
    }
</script>
<template>
    <v-row no-gutters style="height: 100%;">
        <v-col 
            md="8" 
            cols="12" 
            style="height: 100%;"
            v-resize="onResize"
        >
            <div ref="col" class="session__model">
            </div>
        </v-col>
        <v-col md="4" cols="12" style="height: 100%;">
            <slot />
        </v-col>
    </v-row>
</template>
<style scoped lang="scss">
    .session{
        &__model{
            width: 100%;
            height: 100%;
        }
    }
</style>