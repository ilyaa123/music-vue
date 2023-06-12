<script lang="ts" setup>

    import { useAuthStore } from "~/store/authStore";

    const store = useAuthStore();

    const isAuthentificateted = computed(() => store.getIsAuthentificated);
    
</script>
<template>
    <v-layout>
        <v-container class="layout__container my-6">
            <layouts-vertical-navigation-drawer />
            <layouts-horizontal-app-bar />
            <v-main>
                <v-sheet rounded class="pa-4">
                    <slot />
                </v-sheet>

            </v-main>
        </v-container>
    </v-layout>
</template>
<style lang="scss" scoped>
    .layout{
        &__container{
            position: relative;
        }
    }
</style>