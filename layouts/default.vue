<script lang="ts" setup>
    import { useAuthStore } from "~/store/authStore";
    import { navigationItems } from '~/data/navigation'

    const rail = ref<boolean>(false)
</script>
<template>
    <v-layout>
        <v-container class="layout__container mt-6 mb-6 py-0">
            <v-navigation-drawer
                :model-value="true"
                location="left"
                absolute
                rounded
                :rail="rail"
            >
                <v-list lines="one" density="compact" nav>
                    <v-list-item nav @click="rail = !rail">
                        <v-icon :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
                    </v-list-item>
                </v-list>
                
                <v-list lines="one" density="compact" nav>
                    <v-list-item
                        v-for="(item, i) in navigationItems"
                        :key="i"
                        :to="item.to"
                    >
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                
            </v-navigation-drawer>
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