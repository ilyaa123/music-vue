<script setup lang="ts">

    const width = ref<number | undefined>(0);
    const height = ref<number | undefined>(0);
    const col = ref<HTMLDivElement>();
    onMounted(() => {
        width.value = col.value?.clientWidth;
        height.value = col.value?.clientHeight
    })
    const onResize = () => {
        width.value = col.value?.clientWidth;
        height.value = col.value?.clientHeight;
    }
</script>
<template>
    <v-row no-gutters>
        <v-col 
            md="8" 
            cols="12" 
            v-resize="onResize"
        >
            <div ref="col" style="height: 100%;">
                <models-cube :width="width" :height="height" />
            </div>
        </v-col>
        <v-col md="4" cols="12">
            <slot />
        </v-col>
    </v-row>
</template>