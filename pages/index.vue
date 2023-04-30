<script setup lang="ts">
    import { useStore } from "~/store";

    const config = useRuntimeConfig();
    
    definePageMeta({
        layout: 'session-layout',
        middleware: ['auth'] 
    });
    const hanleOnOpenlogin = () => {
        const url = new URL(config.public.baseUrlApi + '/oauth/authorize');
        url.searchParams.set('client_id', config.public.client_id);
        url.searchParams.set('redirect_uri', 'http://' + window.location.host);
        url.searchParams.set('scope', 'music');
        window.open(url)
    }
</script>

<template>
    <v-sheet class="pt-16" color="background">
        <v-card color="surface" class="pt-10 pb-6" elevation="5">
            <v-card-title class="text-center">Log In</v-card-title>
            <v-card-text class="mb-4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia tempore numquam inventore, itaque cupiditate praesentium!</v-card-text>
            <v-card-actions>
                <v-btn 
                    color="secondary" 
                    variant="outlined" 
                    block
                    @click="hanleOnOpenlogin"
                >Sign Ip</v-btn>
            </v-card-actions>
        </v-card>
    </v-sheet>
</template>