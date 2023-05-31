import Router from "@/router";
import listGroup from '@/shared/list_group/list_group.vue'
import {defineComponent} from "vue";

export default defineComponent({
    components: {
        listGroup
    },
    data() {
        return {
            extended: false,
            Icon: 'mdi-menu',
            items: [
                {
                    title: 'Start', link: '', data: [],
                },
                {
                    title: 'Heizöl bestellen', link: '', data: [],
                },
                {
                    title: 'Über uns', link: '', data: []
                },
                {
                    title: 'Kontakt', link: '', data: [],
                },
                {
                    title: 'Info', link: '', data: [
                        {
                            name: 'info@petrobul-heizoel.de', link: '', data: [],
                        },
                        {
                            name: '022335067787', link: '', data: [],
                        },
                        {
                            name: 'GR', link: '', data: [],
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        Router() {
            return Router
        },
        open() {
            this.extended = !this.extended;
            if (this.extended) {
                this.Icon = 'mdi-close'
            } else {
                this.Icon = 'mdi-menu'
            }
        }
    }
})
