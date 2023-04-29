<template>
    <v-container class="session__container">
        <v-row no-gutters style="height: 100%;">
            <v-col md="8" cols="12" style="height: 100%;">

            </v-col>
            <v-col md="4" cols="12" style="height: 100%;">
                <slot />
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped lang="scss">
    .session{
        &__container{
            min-height: 100vh;
        }
    }
</style>