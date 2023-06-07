import {defineComponent} from "vue";
import slider from '@/shared/slider/slider.vue'

export default defineComponent({
    components: {
        slider ,
    },
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
                {
                    title: '“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”',
                    accountName: 'Severus Snape',
                    accountBio: 'Manager @ Slytherin',
                    accountImage: require('@/assets/img/Ellipse 4 (1).png'),
                }, {
                    title: '“Release facebook responsive web design business model canvas seed money monetization.”',
                    accountName: 'Harry Potter',
                    accountBio: 'Team Leader @ Gryffindor',
                    accountImage: require('@/assets/img/Ellipse 4.png'),
                },
            ]
        }
    }
})