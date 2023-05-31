<template>
    <div class="w-100">
        <v-app-bar app class="hidden-sm-and-down pa-0 ma-0" height="150px" color='green' elevation="0">
            <v-container class="w-100 d-flex align-center justify-md-space-between h-100 pa-0 mt-0">
                <div class="d-flex align-center col-6 fill-height pa-0">
                    <a @click="Router().push('/').catch(()=>{})" class="col-4 d-flex align-start justify-start">
                        <img src="@/assets/img/Logo.png" alt="logo" class="fit_image"/>
                    </a>
                    <ul class="d-flex align-center justify-space-between col-8">
                        <li class="ma-0 white--text">Start</li>
                        <li class="ma-0 white--text">Heizöl bestellen</li>
                        <li class="ma-0 white--text">Über uns</li>
                        <li class="ma-0 white--text">Kontakt</li>
                    </ul>
                </div>
                <div class="d-flex align-center justify-space-between col-6">
                    <div class="d-flex align-center ">
                        <v-icon color="red" class="pa-4">mdi-mail-ru</v-icon>
                        <p class="mb-0 ms-2 white--text">info@petrobul-heizoel.de</p>
                    </div>
                    <div class="d-flex align-center ">
                        <v-icon color="red" class="pa-4">mdi-mail-ru</v-icon>
                        <p class="mb-0 ms-2 white--text">022335067787</p>
                    </div>
                    <div class="d-flex align-center ">
                        <img src="@/assets/img/german_flag.svg" class="w-25" alt="german flag">
                        <p class="mb-0 ms-2 white--text">GR</p>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <v-app-bar app class="hidden-md-and-up" height="230px">

        </v-app-bar>
    </div>
</template>

<script src="./app-navbar.component.ts"></script>