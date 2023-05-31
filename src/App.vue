<template>
    <v-app>
        <app-bar class="z-index-up"/>
        <router-view class="z-index-down"/>
    </v-app>
</template>
<script>
import AppBar from "@/core/appbar/appbar.vue";

export default {
    components: {
        AppBar,
    },
    data() {
        return {};
    },
};
</script>