<template>
    <div class="w-100">
        <v-container class="pt-15 pb-15">
            <v-col>
                <v-row align="center" justify="center">
                    <h1 class="text-center text-h5 text-md-h4">So entwickelt sich die Preistendenz für Heizöl</h1>
                </v-row>
                <v-row class="ma-16"></v-row>

                <v-row>
                        <v-tabs v-model="tabModel">
                            <v-tab class="tab col s3">1 Monat</v-tab>
                            <v-tab class="tab col s3">3 Monate</v-tab>
                            <v-tab class="tab col s3">1 Jahr</v-tab>
                            <v-tab class="tab col s3">3 Jahre</v-tab>
                        </v-tabs>
                </v-row>

                <v-row justify="center" class="mt-10 h-500 w-100">
                    <LineChartGenerator
                        :chart-options="chartOptions"
                        :chart-data="chartData"
                        :chart-id="chartId"
                        :dataset-id-key="datasetIdKey"
                        :data="chartData"
                        :options="chartOptions"
                    />
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>

<script src="./chart-section.component.ts"></script>