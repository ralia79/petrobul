<template>
    <div class="w-100 blue-bg mt-15 pb-15">
        <v-container class="d-flex flex-column align-center pt-10 position-relative">
            <p class="white--text">Was unsere Kunden sagen</p>
            <h2 class="white--text text-center">Schau dir unsere Google Bewertungen an</h2>


            <div class="d-flex align-center justify-space-between mt-10 w-100" v-if="sliderData">
                <div class="abs-btn-left d-flex align-center justify-center">
                    <img src="@/assets/img/arrow-left.svg" alt="arrow" class="w-75 ma-0 pa-0">
                </div>
                <div class="abs-btn-right d-flex align-center justify-center">
                    <img src="@/assets/img/arrow-right.svg" alt="arrow" class="w-75 pa-0 ma-0">
                    <v-icon>mdi-arrow-forward</v-icon>
                </div>


                <div class="d-flex flex-row justify-space-around w-100 slider-wrapper-height">
                    <div class="d-flex flex-column align-start col-4 "
                         v-for="(item , kde) in sliderData" :key="kde">
                        <div class="slider-item-height white radius-10 ">
                            <div class="w-100 pa-8 d-flex flex-column justify-space-around align-start h-100">
                                <h3 class="w-75">{{ item.title }}</h3>
                                <div class="d-flex align-center mt-8 w-100">
                                    <img :src="item.accountImage" alt="account profile image">
                                    <div class="d-flex flex-column align-start w-100 ms-2">
                                        <p class="mb-0 profile-title">{{ item.accountName }}</p>
                                        <p class="mb-0 profile-caption">{{ item.accountBio }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </v-container>

    </div>

</template>

<script src="./slider.component.ts"></script>