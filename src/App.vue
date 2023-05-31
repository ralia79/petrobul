<template>
    <v-app>
        <app-bar/>
        <router-view/>
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