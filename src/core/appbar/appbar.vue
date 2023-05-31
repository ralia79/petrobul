<template>
    <div class="w-100">
        <v-app-bar app class="hidden-sm-and-down pa-0 ma-0" height="150px" color='transparent' elevation="0">
            <v-container class="w-100 d-flex align-center justify-md-space-between h-100 pa-0 mt-0">
                <div class="d-flex align-center col-6 fill-height pa-0">
                    <a @click="Router().push('/').catch(()=>{})" class="col-4 d-flex align-start justify-start pa-0 ma-0">
                        <img src="@/assets/img/Logo.png" alt="logo" class="fit_image"/>
                    </a>
                    <ul class="d-flex align-center justify-space-between col-8  mt-7">
                        <li class="ma-0 white--text">Start</li>
                        <li class="ma-0 white--text">Heizöl bestellen</li>
                        <li class="ma-0 white--text">Über uns</li>
                        <li class="ma-0 white--text">Kontakt</li>
                    </ul>
                </div>
                <div class="d-flex align-center justify-end col-6 pa-0 mt-7">
                    <div class="d-flex align-center me-7">
                        <div class="rounded-pill custom_red_bg white--text ma-0 little_circle d-flex align-center justify-center">
                            <img src="@/assets/img/AtSign.svg" alt="@ image" class="w-75">
                        </div>
                        <p class="mb-0 ms-2 white--text">info@petrobul-heizoel.de</p>
                    </div>
                    <div class="d-flex align-center me-7">
                        <div class="rounded-pill custom_red_bg white--text ma-0 little_circle d-flex align-center justify-center">
                            <img src="@/assets/img/phone.svg" alt="@ image" class="w-75">
                        </div>
                        <p class="mb-0 ms-2 white--text">022335067787</p>
                    </div>
                    <div class="d-flex align-center">
                        <img src="@/assets/img/german_flag.svg" class="w-25" alt="german flag">
                        <p class="mb-0 ms-2 white--text">GR</p>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <v-app-bar app class="hidden-md-and-up" height="120px" color="#0A2640F9">
            <v-container class="ma-0 pa-0">
                <div class="d-flex flex-column w-100 ma-0 ma-md-4">
                    <div class="d-flex align-center justify-space-between">
                        <a @click="Router().push('/').catch(()=>{})">
                            <img src="@/assets/img/Logo.png" alt="logo" class="fit_image mt-2"/>
                        </a>
                        <v-icon class="white--text" @click="open()">{{ Icon }}</v-icon>
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <div class="w-100" style="margin-top: 150px; position: fixed" v-if="extended">
            <listGroup :items="items"/>
        </div>
    </div>
</template>

<script src="./appbar.component.ts"></script>