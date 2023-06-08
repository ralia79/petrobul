<template>
    <v-row>
        <v-container class="transparent">
            <v-row class=" white radius-15 elevation-5 pa-10 pa-md-5 mb-md-15">
                <v-col class="col col-12 col-md-5 dark-red-bg radius-15 pa-5 pa-md-10">
                    <p class="white--text mt-5">SIE BRAUCHEN HILFE?</p>
                    <h1 class="white--text text-h6 text-md-h4 mt-5">
                        Sie haben noch Fragen?Lassen Sie uns diese Beantworten.
                    </h1>

                    <v-row align="center" class="mt-10 mt-md-15 ma-0">
                        <img src="@/assets/img/phone.svg" alt="phone vector" class="me-4 w-25px w-md-15px"/>
                        <p class="ma-0 white--text text-h6">022335067787</p>
                    </v-row>
                    <v-row align="center" class="mt-5 ma-0">
                        <img src="@/assets/img/AtSign.svg" alt="@ vector" class="me-4 w-25px w-md-15px"/>
                        <p class="ma-0 white--text text-h6">Info@petrobul.de</p>
                    </v-row>
                    <v-row align="center" class="mt-5 mb-5 ma-0">
                        <img src="@/assets/img/location.svg" alt="Location vector" class="me-4 w-25px w-md-15px"/>
                        <p class="ma-0 white--text text-h6">Gildenweg 6, 50354 Hürth</p>
                    </v-row>


                    <v-row justify="center" class="mt-15 pt-15 d-none d-md-flex  ma-0">
                        <v-icon large class="white--text me-4">mdi-facebook</v-icon>
                        <v-icon large class="white--text me-4">mdi-twitter</v-icon>
                        <v-icon large class="white--text me-4">mdi-instagram</v-icon>
                        <v-icon large class="white--text">mdi-linkedin</v-icon>
                    </v-row>
                </v-col>
                <v-col class="col col-12 col-md-7 ps-md-10 pt-10 pt-md-0">
                    <h2>Kontaktformular</h2>
                    <h1>
                        Hinterlassen Sie uns eine Nachricht
                    </h1>
                    <p>
                        Verwenden Sie das unten stehende Formular, um uns schnell eine Nachricht zu senden.
                    </p>
                    <v-row align="center" justify="space-between" class="mt-10 mt-md-0">
                        <v-col class="col col-12 col-md-6 pa-0 pa-md-3">
                            <v-text-field placeholder="Name" class="rounded-text-field border-grey"
                                          outlined></v-text-field>
                        </v-col>
                        <v-col class="col col-12 col-md-6 pa-0 pa-md-3">
                            <v-text-field placeholder="Email" class="rounded-text-field border-grey"
                                          outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="space-between" class="mt-0">
                        <v-col class="col col-12 col-md-6 pa-0 pa-md-3">
                            <v-text-field placeholder="Telephonnummer" class="rounded-text-field border-grey"
                                          outlined></v-text-field>
                        </v-col>
                        <v-col class="col col-12 col-md-6 pa-0 pa-md-3">
                            <v-text-field placeholder="Betreff" class="rounded-text-field border-grey"
                                          outlined></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row align="center" class="ma-md-0">
                        <v-textarea placeholder="Schreiben Sie Ihre Kommentare"
                                    class="pa-0 rounded-text-field border-grey" outlined></v-textarea>
                    </v-row>

                    <v-row justify="center" justify-md="end">
                        <v-btn color="#CA0000" class="pt-7 pb-7 pa-md-7 rounded-btn" dark>
                            Nachricht senden
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-row>
</template>

<script src="./absolute-form.component.ts"></script>