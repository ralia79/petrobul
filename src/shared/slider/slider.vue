<template>
    <div class="w-100 blue-bg mt-15 pb-15">
        <v-container class="pt-10 position-relative">
            <v-col class="pa-0">
                <v-row justify="center">
                    <p class="white--text">Was unsere Kunden sagen</p>
                </v-row>
                <h2 class="white--text text-center">Schau dir unsere Google Bewertungen an</h2>
                <v-row align="start" justify="space-between" class="mt-10 ma-0 slider-wrapper-height"
                       v-if="sliderData">
                    <carousel :paginationEnabled="true"
                              :navigationEnabled="true"
                              :perPageCustom="[[0 , 1],[768, 1], [1024, 3]]"
                              :navigationClickTargetSize="1"
                              :navigationNextLabel="''"
                              :navigationPrevLabel="''"
                    >
                        <Slide v-for="(item , kde) in sliderData" :key="kde" class="ma-0">
                            <v-col class="">
                                <v-row class="slider-item-height ma-0 white radius-10">
                                    <v-col class="pa-8 col col-12">
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

                        </Slide>
                    </carousel>


                </v-row>
            </v-col>
        </v-container>
    </div>
</template>

<script src="./slider.component.ts"></script>