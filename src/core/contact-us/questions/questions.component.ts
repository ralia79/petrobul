import {defineComponent} from "vue";
import hoverCard from "@/shared/hover-card/hover-card.vue";

export default defineComponent({
    components : {
       hoverCard
    } ,
    data() {
        return {
            cards: [
                {
                    title: 'Wie bekomme ich meinen Liefertermin mitgeteilt?',
                    caption: 'Sie bekommen Ihren Liefertermin von uns per E-Mail zugesendet. Termine können unbeabsichtigt in Vergessenheit geraten, deswegen erinnern wir Sie einen Tag vor Ihrer Lieferung nochmal telefonisch'
                },
                {
                    title: 'Wieso können Sie das Heizöl so günstig anbieten?',
                    caption: 'Sie bekommen Ihren Liefertermin von uns per E-Mail zugesendet. Termine können unbeabsichtigt in Vergessenheit geraten, deswegen erinnern wir Sie einen Tag vor Ihrer Lieferung nochmal telefonisch'
                },
                {
                    title: 'Wie lang ist der Schlauch vom Tankwagen und ist es nötig diesen anzugeben?',
                    caption: 'Sie bekommen Ihren Liefertermin von uns per E-Mail zugesendet. Termine können unbeabsichtigt in Vergessenheit geraten, deswegen erinnern wir Sie einen Tag vor Ihrer Lieferung nochmal telefonisch'
                },
                {
                    title: 'Wird meine Lieferung an eine Speditionsfirma übergeben?',
                    caption: 'Sie bekommen Ihren Liefertermin von uns per E-Mail zugesendet. Termine können unbeabsichtigt in Vergessenheit geraten, deswegen erinnern wir Sie einen Tag vor Ihrer Lieferung nochmal telefonisch'
                },
            ]
        }
    }
})