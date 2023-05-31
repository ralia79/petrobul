<template>
    <v-card
            class="mx-auto w-100"
    >
        <v-list color="#0A2640F9">
            <v-list-item v-for="(item , key) in items" :key="key" v-if="item.data.length === 0">
                <RouterLink :to="item.link">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </RouterLink>
            </v-list-item>

            <v-list-group v-for="(item , key) in items" :key="key" v-if="item.data.length > 0">
                <template v-slot:activator>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </template>


                <v-list-item
                        v-for="(item , key) in item.data"
                        :key="key"
                        link
                >
                    <RouterLink :to="item.link">
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </RouterLink>
                </v-list-item>
            </v-list-group>

        </v-list>
    </v-card>
</template>

<script src="./list_group.component.ts"></script>
