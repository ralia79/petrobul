<template>
    <v-row class="ma-0 blue-bg pt-15 pb-15 footer-colors">
        <v-container>
            <v-row justify="space-between">
                <v-col class="col col-12 col-md-4">
                    <v-row class="ma-0">
                        <img src="@/assets/img/Logo-mobile.svg" alt="LOGO" class="fit_image">
                    </v-row>
                    <v-row class="ma-0 mt-5">
                        <p class="ma-0 mt-5">
                            Petrobul Heizöl <br>
                            Als mittelständischer, familiengeführter Energiedienstleister aus Hürth liefert Petrobul
                            Heizöl seit über 25 Jahren zuverlässig und termingerecht hochwertige Energieprodukte in
                            Hürth und Umgebung.
                        </p>
                    </v-row>
                    <v-row justify="start" class="mt-10 ma-0">
                        <v-icon large color="#949494" class="me-13">mdi-facebook</v-icon>
                        <v-icon large color="#949494" class="me-13">mdi-twitter</v-icon>
                        <v-icon large color="#949494" class="me-13">mdi-instagram</v-icon>
                        <v-icon large color="#949494">mdi-linkedin</v-icon>
                    </v-row>
                </v-col>
                <v-col class="col col-12 col-md-4">
                    <v-row align="start" class="ma-0">
                        <v-col class="col col-6">
                            <p class="white--text font-bold">
                                MENÜ
                            </p>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Start</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Heizöl bestellen</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Über uns</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Karriere</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Kontakt</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Impressum</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Datenschutz</RouterLink>
                            </v-row>
                        </v-col>
                        <v-col class="col col-6">

                            <p class="white--text font-bold">
                                INFO
                            </p>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">+49 892 358 75</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">info@petrobul-heizoel.de</RouterLink>
                            </v-row>
                            <v-row class="ma-0 mb-5 grey-text">
                                <RouterLink to="/">Gildenweg 6, 50354 Hürth</RouterLink>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="col col-12 col-md-4">
                    <v-row justify="center" align="center" class="ma-0">
                        <h3 class="white--text text-center line-height-50">
                            Wir versorgen Sie mit Neuigkeiten und Informationen
                        </h3>
                    </v-row>
                    <v-row align="start">
                        <v-col class="col col-8 pa-0 pe-3">
                            <v-text-field solo
                                          placeholder="Geben sie ihre E-Mail"
                                          prepend-inner-icon="mdi-email"
                                          class="rounded-text-field"
                                          color="red"
                            ></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="col col-4 pa-0">
                            <v-btn color="#CA0000" class="pt-5 pb-5 pa-md-6 w-100 rounded-btn small-font white--text"
                                   dark>
                                Jetzt anfangen
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-row>
</template>
<script setup lang="ts">
</script>