<template>
    <div class="w-100 blue-bg mt-15 pb-15">
        <v-container class="pt-10 position-relative">
            <v-col>
                <v-row justify="center">
                    <p class="white--text">Was unsere Kunden sagen</p>
                </v-row>
                <h2 class="white--text text-center">Schau dir unsere Google Bewertungen an</h2>
                <v-row align="center" justify="space-between" class="mt-10 w-100 carousel ma-0" v-if="sliderData">
                    <v-row align="center" justify="center" class="abs-btn-left d-none d-md-flex ma-0" @click="moveLeft">
                        <img src="@/assets/img/arrow-left.svg" alt="arrow" class="w-75 ma-0 pa-0">
                    </v-row>
                    <v-row align="center" justify="center" class="abs-btn-right d-none d-md-flex ma-0" @click="next">
                        <img src="@/assets/img/arrow-right.svg" alt="arrow" class="w-75 pa-0 ma-0">
                        <v-icon>mdi-arrow-forward</v-icon>
                    </v-row>
                    <v-row align="start" justify="space-around" class="slider-wrapper-height inner flex-nowrap ma-0">
                        <v-col class="col col-12 col-md-4"
                               v-for="(item , kde) in sliderData" :key="kde">
                            <v-row class="slider-item-height ma-0 white radius-10">
                                <v-col class="pa-8">
                                    <h3 class="w-75 w-md-100">{{ item.title }}</h3>
                                    <v-row justify="start" class="ma-0 mt-8">
                                        <v-col class="col col-3">
                                            <img :src="item.accountImage" alt="account profile image">
                                        </v-col>
                                        <v-col class="col col-9">
                                            <p class="mb-0 profile-title">{{ item.accountName }}</p>
                                            <p class="mb-0 profile-caption">{{ item.accountBio }}</p>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>

<script src="./slider.component.ts"></script>