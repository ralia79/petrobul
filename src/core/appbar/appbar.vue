<template>
    <div class="w-100">
        <v-app-bar app class="hidden-sm-and-down pa-0 ma-0" height="150px" :color="appbarColor" elevation="0">
            <v-container>
                <v-row align="center">
                    <v-row class="pa-0">
                        <a @click="Router().push('/').catch(()=>{})"
                           class="col-4 d-flex align-start justify-start pa-0 ma-0">
                            <img src="@/assets/img/Logo-mobile.svg" alt="logo" class="fit_image"/>
                        </a>
                        <ul class="d-flex align-center justify-space-between col-8 mt-7">
                            <li class="ma-0 white--text">Start</li>
                            <li class="ma-0 white--text">Heizöl bestellen</li>
                            <li class="ma-0 white--text">Über uns</li>
                            <li class="ma-0 white--text">Kontakt</li>
                        </ul>
                    </v-row>
                    <v-spacer></v-spacer>
                    <v-row justify="end" class="pa-0 mt-4">
                        <v-row class="ma-0">
                            <div class="rounded-pill custom_red_bg white--text ma-0 little_circle d-flex align-center justify-center">
                                <img src="@/assets/img/AtSign.svg" alt="@ image" class="w-75">
                            </div>
                            <p class="mb-0 ms-2 white--text">info@petrobul-heizoel.de</p>
                        </v-row>
                        <v-row class="ma-0">
                            <div class="rounded-pill custom_red_bg white--text ma-0 little_circle d-flex align-center justify-center">
                                <img src="@/assets/img/phone.svg" alt="@ image" class="w-75">
                            </div>
                            <p class="mb-0 ms-2 white--text">022335067787</p>
                        </v-row>
                    </v-row>
                </v-row>

            </v-container>
        </v-app-bar>
        <v-app-bar app class="hidden-md-and-up" height="110px" color="#0A2640F9">
            <v-container class="ma-0 pa-0">
                <v-col class="ma-0 ma-md-4">
                    <v-row class="ma-0">
                        <v-row justify="start">
                            <a @click="Router().push('/').catch(()=>{})">
                                <img src="@/assets/img/Logo-mobile.svg" alt="logo" class="fit_image_mobile mt-2"/>
                            </a>
                        </v-row>
                        <v-spacer></v-spacer>
                        <v-row justify="end" align="center">
                            <v-btn class="white--text" @click="open()" icon>
                                <v-icon large>{{ Icon }}</v-icon>
                            </v-btn>
                        </v-row>
                    </v-row>
                </v-col>
            </v-container>
        </v-app-bar>
        <div class="w-100" style="margin-top: 110px; position: fixed" v-if="extended">
            <listGroup :items="items"/>
        </div>
    </div>
</template>

<script src="./appbar.component.ts"></script>