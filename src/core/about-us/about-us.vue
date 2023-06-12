<template>
    <v-col class="pa-0">
        <div class="blue-bg padding-custom-top"></div>

        <v-container>
            <v-col align="center" class="white h-100 pa-0 pt-15 pb-15">
                <p>WER SIND WIR?</p>
                <h2 class="text-h6 text-md-h4">Sie möchten mehr über uns Erfahren?</h2>
                <h2 class="text-h6 text-md-h5 mt-10">Petrobul Heizöl Keyfacts</h2>
                <p class="mt-5">Petrobul ist ein mittelständischer, familiengeführter Energiedienstleister aus
                    Hürth.</p>
                <v-row>
                    <v-col class="col col-12 col-md-4">
                        <img src="@/assets/img/first.svg" alt="image" class="w-100"/>
                        <v-row align="center" class="ma-0">
                            <v-col class="col col-1">
                                <div class="blue-circle">
                                    <v-icon color="white">mdi-check</v-icon>
                                </div>
                            </v-col>
                            <v-col align="start" class="col col-11 ps-7">
                                <p class="ma-0">Familienbetrieb in der 4. Generation</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class="col col-12 col-md-4">
                        <img src="@/assets/img/second.svg" alt="image" class="w-100"/>
                        <v-row align="center" class="ma-0">
                            <v-col class="col col-1">
                                <div class="blue-circle">
                                    <v-icon color="white">mdi-check</v-icon>
                                </div>
                            </v-col>
                            <v-col align="start" class="col col-11 ps-7">
                                <p class="ma-0">Seit über 25 Jahren versorgen wir Privathaushalte und Unternehmen.</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class="col col-12 col-md-4">
                        <img src="@/assets/img/third.svg" alt="image" class="w-100"/>
                        <v-row align="center" class="ma-0">
                            <v-col class="col col-1">
                                <div class="blue-circle">
                                    <v-icon color="white">mdi-check</v-icon>
                                </div>
                            </v-col>
                            <v-col align="start" class="col col-11 ps-7">
                                <p class="ma-0">Ihr zuverlässiger Partner in Sachen Energiedienstleistung.</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-container>

        <slider />

        <SectionSecond/>

    </v-col>
</template>


<script src="./about-us.component.ts"></script>