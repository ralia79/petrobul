<template>
    <div class="w-100 blue-bg mt-15 pb-15">
        <v-container class="pt-10 position-relative">
            <v-col class="pa-0">
                <v-row justify="center">
                    <p class="white--text">Was unsere Kunden sagen</p>
                </v-row>
                <h2 class="white--text text-center">Schau dir unsere Google Bewertungen an</h2>

                <v-row align="center" class="ma-0 mt-5" justify="center">
                    <v-col>
                        <v-row class="ma-0" justify="end">
                            <star-rating :value="rating" :disabled="true"></star-rating>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row align="center" justify="start" class="ma-0">
                            <p class="white--text text-h6 ma-0 me-4">{{ user_ratings_total }}</p>
                            <p class="white--text text-h6 ma-0">Bewertungen</p>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row align="start" justify="space-between" class="mt-10 ma-0 slider-wrapper-height" v-if="reviews">
                    <carousel :paginationEnabled="true"
                              :navigationEnabled="true"
                              :perPageCustom="[[0 , 1],[768, 1], [1024, 3]]"
                              :navigationClickTargetSize="1"
                              :navigationNextLabel="''"
                              :navigationPrevLabel="''"
                              :paginationColor="'#D9D9D9'"
                              :paginationActiveColor="'#CA0000'"
                              :paginationPadding="10"
                              :paginationSize="20"

                    >
                        <Slide v-for="(item , kde) in reviews" :key="kde">
                            <v-col class="change-scale-slide">
                                <v-row class="slider-item-height ma-0 white radius-10">
                                    <v-col class="pe-8 ps-8 pt-5 col col-12 d-flex flex-column justify-space-between">
                                        <p class="h-50 ma-0">{{ item.text.substring(0, 180) + " ..." }}</p>
                                        <v-row align="center" justify="start" class="ma-0">
                                            <star-rating :value="item.rating" :disabled="true"></star-rating>
                                            <p class="ma-0 grey-text ps-5">{{ item.rating }}</p>
                                        </v-row>
                                        <v-row justify="start" align="center" class="ma-0">
                                            <v-col class="col col-3">
                                                <img :src="item.profile_photo_url" alt="account profile image"
                                                     class="w-50px">
                                            </v-col>
                                            <v-col class="col col-9">
                                                <p class="mb-0 profile-title">{{ item.author_name }}</p>
                                                <p class="mb-0 profile-caption">{{ item.time }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </Slide>
                    </carousel>
                </v-row>
                <v-row v-if="!reviews">
                    <v-skeleton-loader
                            class="mx-auto mb-15"
                            width="100%"
                            type="image"
                    ></v-skeleton-loader>
                </v-row>

                <v-row align="center" justify-md="end" justify="center">
                    <span class="powered-by-google"></span>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>

<script src="./slider.component.ts"></script>