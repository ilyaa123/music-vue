<script setup lang="ts">
  import { useUserStore } from "~/store/userStore";

  const router = useRouter();

  const store = useUserStore();

  const user = computed(() => store.getCurrentUser)

</script>
<template>
    <v-app-bar class="mx-4" location="top" rounded>
        <template v-slot:prepend>
            <v-app-bar-title>Music</v-app-bar-title>
        </template>

        <v-spacer></v-spacer>

        <v-btn class="mr-4" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <div class="mr-6" v-if="Object.keys(user).length > 0">
          <v-btn @click="router.push('/app/profile/basic')" icon>
            <v-avatar :image="user.image"></v-avatar>
          </v-btn>  
        </div>
        <!-- <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
    </v-app-bar>
</template>