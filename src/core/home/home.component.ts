import {defineComponent} from "vue";
import ourService from '@/core/home/our-service/our-service.vue'
import FirstSection from "@/core/home/first-section/first-section.vue";
import AlbumSection from "@/core/home/album-section/album-section.vue"
import slider from '@/shared/slider/slider.vue'
import chartSection from '@/core/home/chart-section/chart-section.vue'

export default defineComponent({
    components: {
        FirstSection,
        ourService,
        AlbumSection,
        slider ,
        chartSection
    },
    data() {
        return {

        }
    }
})