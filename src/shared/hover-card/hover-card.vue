<template>
    <v-col class="album-item-hover" @mouseover="hover" @mouseout="unHover">
        <v-row align="center" class="ma-0">
            <v-col class="col col-1 pa-0">
                <img :src="iconImage" alt="icon"
                     class="w-25 me-4">
            </v-col>
            <v-col class="col col-11">
                <p class="ma-0 pa-0">{{ title }}</p>
            </v-col>
        </v-row>

        <v-row justify="center" class="showCaption">
                <p class="w-75 font-15">{{ caption }}</p>
        </v-row>

    </v-col>
</template>


<script src="./hover-card.component.ts"></script>


<style scoped>
.showCaption {
    display: none;
    transition: all 0.4s;
}

.album-item-hover:hover {
    .showCaption {
        display: flex;
    }
}
</style>