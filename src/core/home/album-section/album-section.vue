<template>
    <div class="w-100 pink-bg pt-10">
        <v-container class="d-flex flex-column align-center">
            <div class="d-flex flex-column flex-md-row align-center">
                <div class="col-12 col-md-6 align-center position-relative ">
                    <img src="@/assets/img/ca_oil_pumps 1.png" alt="image"
                         class="w-100 rounded_radius album-first-image">
                    <img src="@/assets/img/assets02.png" alt="image2" class="album-second-image d-none d-md-block">
                </div>
                <div class="col-12 col-md-6 align-center ps-md-10">
                    <h2 class="w-100 text-h6 text-md-h4">
                        Unkomplizierte Abwicklung
                    </h2>
                    <p class="w-100 mt-5 mt-md-8 mb-md-8 ma-0">
                        Heizöl bestellen war noch nie so einfach! Denn unsere geschulten Mitarbeiter*innen von Petrobul
                        Heizöl helfen Ihnen dabei, den idealen Bestellzeitpunkt und die richtige Liefermenge für Ihre
                        Lieferung zu finden. Dabei garantieren wir Ihnen bei Angebotsbestätigung den reibungslosen
                        Ablauf Ihrer Bestellung, denn bei Petrobul hat die Zufriedenheit unserer Kunden oberste
                        Priorität.
                    </p>
                    <div class="d-flex align-center mt-4">
                        <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                        <p class="ma-0 pa-0 font-bold">Unkomplizierte Abwicklung</p>
                    </div>
                    <div class="d-flex align-center mt-4">
                        <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                        <p class="ma-0 pa-0 font-bold">Unkomplizierte Abwicklung</p>
                    </div>
                    <div class="d-flex align-center mt-4">
                        <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                        <p class="ma-0 pa-0 font-bold">Unkomplizierte Abwicklung</p>
                    </div>
                    <div class="d-flex align-center mt-4">
                        <v-icon class="me-5 blue-bg pa-1 rounded_radius" color="white">mdi-check</v-icon>
                        <p class="ma-0 pa-0 font-bold">Unkomplizierte Abwicklung</p>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row-reverse align-center mt-15 mb-md-15">
                <div class="col-12 col-md-6 align-center position-relative ">
                    <img src="@/assets/img/13545183_shift-1200x0_1yWVeB_nq4LBO 1.png" alt="image"
                         class="w-100 rounded_radius album-first-image">
                    <img src="@/assets/img/assets03.png" alt="image2" class="album-second-image d-none d-md-block">
                </div>
                <div class="col-12 col-md-6 align-center ps-md-10">
                    <h2 class="w-100 text-h6 text-md-h4">
                        Petrobul Heizöl Liefergebiet
                    </h2>
                    <p class="w-100 mt-5 mt-md-8 mb-md-8 ma-0">
                        Wir liefern Heizöl in Hürth und in die umliegenden Städte und Gemeinden. Unter anderem umfasst
                        unser Einzugsgebiet Nordrhein-Westfalen, Hessen und den Großraum Rheinlandpfalz.
                        Gerne geben wir Ihnen persönlich Auskunft darüber, ob wir auch Ihren Haushalt beliefern können.
                    </p>
                    <div class="d-flex align-center mt-4 album-item-hover" @mouseover="changeFeatherColor"
                         @mouseout="changeFeatherColor">
                        <img :src="require(`@/assets/img/feather-${featherColor}.svg`)" alt="icon" class="w-25 me-4">
                        <p class="ma-0 pa-0">Unkomplizierte Abwicklung</p>
                    </div>
                    <div class="d-flex align-center mt-4 album-item-hover" @mouseover="changeEyeColor"
                         @mouseout="changeEyeColor">
                        <img :src="require(`@/assets/img/eye-${eyeColor}.svg`)" alt="icon" class="w-25 me-4">
                        <p class="ma-0 pa-0">Petrobul Heizöl Liefergebiet </p>
                    </div>
                    <div class="d-flex align-center mt-4 album-item-hover" @mouseover="changeSunColor"
                         @mouseout="changeSunColor">
                        <img :src="require(`@/assets/img/sun-${sunColor}.svg`)" alt="icon" class="w-25 me-4">
                        <p class="ma-0 pa-0">Petrobul Heizöl Liefergebiet </p>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script src="./album-section.component.ts"></script>
