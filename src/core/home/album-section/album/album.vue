<template>
    <div class="w-100">
        <v-container class="d-flex flex-column flex-md-row white-bg" :class="isLeft ? '' : 'flex-column flex-md-row-reverse'">
            <div class="col-12 col-md-6 align-center position-relative">
                <img :src="image" :alt="image" class="w-100 rounded_radius">
                fdasdfsa {{image2}}
                <img :src="image2" :alt="image2" class="album-second-image">
            </div>
            <div class="col-12 col-md-6 align-center pa-8">
                <v-expansion-panels accordion class="mt-5">
                    <v-expansion-panel v-for="(item , key) in items" :key="key">
                        <v-expansion-panel-header
                                class="blue-text pt-6 pb-6 ps-0 pe-0"
                        >
                            <template v-slot:actions>
                                <v-icon color="#297D7D">
                                    mdi-arrow-down
                                </v-icon>
                            </template>
                            {{ item.title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="grey-text text-md-h6 font-rubik">
                            {{ item.caption }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </v-container>
    </div>


</template>

<script src="./album.component.ts"></script>
