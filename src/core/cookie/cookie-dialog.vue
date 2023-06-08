<template>
    <v-bottom-sheet v-model="showCookie" persistent>
        <v-sheet class="text-left transparent" color="transparent">
            <div id="cookie-consent-container">
                <div class="cookie-consent-text">
                    <v-container full-width>
                        <v-row>
                            <v-col>
                                <h3>Verwendung von Cookies</h3>
                                <p>
                                    Wir verwenden Cookies (auch von Drittanbietern), um Informationen über die Nutzung
                                    unserer Websites durch die Besucher zu
                                    sammeln. Diese Cookies helfen uns dabei, Ihnen das bestmögliche Online-Erlebnis zu
                                    bieten, unsere Websites ständig zu
                                    verbessern und Ihnen Angebote zu unterbreiten, die auf Ihre Interessen zugeschnitten
                                    sind. Mit dem Klick auf den Button
                                    "Allen zustimmen" erklären Sie sich mit der Verwendung von allen
                                    zustimmungspflichtigen Cookies einverstanden.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row class="ma-0">
                            <v-col class="d-flex align-center justify-end">
                                <v-btn color="#CA0000" class="pt-7 pb-7 pa-md-7 rounded-btn"
                                       @click="setCookieAndClose" dark>Zustimmen
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script lang="ts" src="./cookie-consent.component.ts"></script>
<style lang="scss" scoped>
@import 'cookie-consent.scss';
</style>
