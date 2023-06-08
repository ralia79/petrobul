<template>
    <v-row class="ma-0 mb-15">
        <v-container>
            <v-row justify="center" class="ma-0">
                <p class="grey-text">Hier finden Sie einige Antworten auf häufig gestellte Fragen</p>
            </v-row>
            <v-row justify="center" class="ma-0">
                <h2 class="text-h6 text-md-h4 font-bold">Häufig gestellte Fragen</h2>
            </v-row>
            <v-col class="height-card-wrapper">
                <v-row justify="space-between" align="stretch" class="mt-10 ma-0">
                    <v-col class="col-12 col-md-5" v-for="(item , idx) in cards" :key="idx">
                        <hover-card :title="item.title" :caption="item.caption" />
                    </v-col>
                </v-row>
            </v-col>
        </v-container>
    </v-row>
</template>
<script src="./questions.component.ts"></script>