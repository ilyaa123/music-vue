<script setup lang="ts">
    import { ref } from 'vue';
    import { navigationItems } from '../../../data/navigation';
    const rail = ref<boolean>(true)
</script>
<template>
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
</template>