<script setup lang="ts">
    import { useAuthStore } from "~/store/authStore";

    const config = useRuntimeConfig();
    const authStore = useAuthStore();    
    
    definePageMeta({
        layout: 'session-layout',
        middleware: ['auth'] 
    });

    const authError = computed(() => authStore.getAuthError);

    const hanleOnOpenlogin = () => {
        const url = new URL(config.public.baseUrlApi + '/oauth/authorize');
        url.searchParams.set('client_id', config.public.client_id);
        url.searchParams.set('redirect_uri', 'http://' + window.location.host);
        url.searchParams.set('scope', 'music');
        window.location.href = String(url)
    };
</script>

<template>
    <v-sheet color="surface" style="height: 100%; float: right;">
        <v-card color="surface" class="pt-10 pb-6" elevation="5" style="height: 100%;" max-width="400px" flat>
            <v-card-title class="text-center">Log In</v-card-title>
            <v-card-text class="mb-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tempore numquam inventore, itaque cupiditate praesentium!</v-card-text>
            <v-card-subtitle class="error text-center" v-if="!!authError">{{ authError }}</v-card-subtitle>
            <v-card-actions>
                <v-btn 
                    color="primary" 
                    variant="outlined" 
                    block
                    @click="hanleOnOpenlogin"
                >Sign In</v-btn>
            </v-card-actions>
        </v-card>
    </v-sheet>
</template>
<style scoped lang="scss">
    .error{
        color: rgb(var(--v-theme-error));
    }
</style>