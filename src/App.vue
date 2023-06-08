<template>
    <v-app>
        <app-bar class="z-index-up"/>
        <router-view class="z-index-down"/>
        <CustomFooter class="z-index-up"/>

        <CookieDialog />
    </v-app>
</template>

<script src="@/app.component.ts"></script>
