<template>
    <v-row class="pink-bg pt-10">
        <v-container>
            <v-col>
                <v-row>
                    <v-col align="center" class="col col-12 col-md-6 position-relative">
                        <img src="@/assets/img/petrobul-lkw 1.svg" alt="image"
                             class="w-100 rounded_radius album-first-image">
                    </v-col>
                    <v-col class="col col-12 col-md-6 ps-md-10">
                        <h2 class="w-100 text-h6 text-md-h4">
                            Unkomplizierte Abwicklung
                        </h2>
                        <p class="w-100 mt-5 mt-md-8 mb-md-8 ma-0">
                            Heizöl bestellen war noch nie so einfach! Denn unsere geschulten Mitarbeiter*innen von
                            Petrobul
                            Heizöl helfen Ihnen dabei, den idealen Bestellzeitpunkt und die richtige Liefermenge für
                            Ihre
                            Lieferung zu finden. Dabei garantieren wir Ihnen bei Angebotsbestätigung den
                            reibungslosen
                            Ablauf Ihrer Bestellung, denn bei Petrobul hat die Zufriedenheit unserer Kunden oberste
                            Priorität.
                        </p>
                        <v-row align="center" class="mt-4 ma-0">
                            <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                            <p class="ma-0 pa-0 font-bold">We connect our customers with the best.</p>
                        </v-row>
                        <v-row align="center" class="mt-4 ma-0">
                            <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                            <p class="ma-0 pa-0 font-bold">Advisor success customer launch party.</p>
                        </v-row>
                        <v-row align="center" class="mt-4 ma-0">
                            <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                            <p class="ma-0 pa-0 font-bold">Business-to-consumer long tail.</p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="flex-md-row-reverse mt-15 mb-md-15">
                    <v-col class="col col-12 col-md-6 position-relative ">
                        <img src="@/assets/img/image 95.svg" alt="image"
                             class="w-100 rounded_radius album-first-image">
                    </v-col>
                    <v-col class="col col-12 col-md-6 ps-md-10">
                        <h2 class="w-100 text-h6 text-md-h4">
                            Petrobul Heizöl Liefergebiet
                        </h2>
                        <p class="w-100 mt-5 mt-md-8 mb-md-8 ma-0">
                            Wir liefern Heizöl in Hürth und in die umliegenden Städte und Gemeinden. Unter anderem
                            umfasst
                            unser Einzugsgebiet Nordrhein-Westfalen, Hessen und den Großraum Rheinlandpfalz.
                            Gerne geben wir Ihnen persönlich Auskunft darüber, ob wir auch Ihren Haushalt beliefern
                            können.
                        </p>
                        <v-row align="center" class="mt-4 album-item-hover" @mouseover="changeFeatherColor"
                               @mouseout="changeFeatherColor">
                            <img :src="require(`@/assets/img/feather-${featherColor}.svg`)" alt="icon"
                                 class="w-25 me-4">
                            <p class="ma-0 pa-0">Unkomplizierte Abwicklung</p>
                        </v-row>
                        <v-row align="center" class="mt-4 album-item-hover" @mouseover="changeEyeColor"
                               @mouseout="changeEyeColor">
                            <img :src="require(`@/assets/img/eye-${eyeColor}.svg`)" alt="icon" class="w-25 me-4">
                            <p class="ma-0 pa-0">Petrobul Heizöl Liefergebiet </p>
                        </v-row>
                        <v-row align="center" class="mt-4 album-item-hover" @mouseover="changeSunColor"
                               @mouseout="changeSunColor">
                            <img :src="require(`@/assets/img/sun-${sunColor}.svg`)" alt="icon" class="w-25 me-4">
                            <p class="ma-0 pa-0">Petrobul Heizöl Liefergebiet </p>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-container>
    </v-row>
</template>

<script src="./album-section.component.ts"></script>
