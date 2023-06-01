import {defineComponent} from "vue";
import ourService from '@/core/home/our-service/our-service.vue'
import FirstSection from "@/core/home/first-section/first-section.vue";
import AlbumSection from "@/core/home/album-section/album-section.vue"
import slider from '@/shared/slider/slider.vue'

export default defineComponent({
    components: {
        FirstSection,
        ourService,
        AlbumSection,
        slider
    },
    // "title"  , "accountName" , "accountImage" , "accountBio"
    data() {
        return {
            sliderData: [
                {
                    title: '“Release facebook responsive web design business model canvas seed money monetization.”',
                    accountName: 'Harry Potter',
                    accountBio: 'Team Leader @ Gryffindor',
                    accountImage: require('@/assets/img/Ellipse 4.png'),
                },
                {
                    title: '“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”',
                    accountName: 'Severus Snape',
                    accountBio: 'Manager @ Slytherin',
                    accountImage: require('@/assets/img/Ellipse 4 (1).png'),
                },
                {
                    title: '“Release facebook responsive web design business model canvas seed money monetization.”',
                    accountName: 'Harry Potter',
                    accountBio: 'Team Leader @ Gryffindor',
                    accountImage: require('@/assets/img/Ellipse 4.png'),
                },
            ]
        }
    }
})