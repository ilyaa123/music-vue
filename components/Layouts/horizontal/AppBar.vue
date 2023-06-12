<script setup lang="ts">

</script>
<template>
    <v-app-bar class="ms-4" rounded>
        <template v-slot:prepend>
            <v-app-bar-title>Music</v-app-bar-title>
        </template>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>