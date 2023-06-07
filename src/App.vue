<template>
    <v-app>
        <app-bar class="z-index-up"/>
        <router-view class="z-index-down"/>
        <CustomFooter class="z-index-up"/>
    </v-app>
</template>
<script>
import AppBar from "@/core/appbar/appbar.vue";
import CustomFooter from "@/core/custom-footer/custom-footer.vue";

export default {
    components: {
        AppBar,
        CustomFooter
    },
    data() {
        return {};
    },
};
</script>