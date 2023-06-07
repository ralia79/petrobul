import {defineComponent} from "vue";
//@ts-ignore
import { Carousel, Slide } from 'vue-carousel';


export default defineComponent({
    props: ["sliderData"],
    components: {
        Carousel,
        Slide
    } ,
    data() {
        return {
            innerStyles: {},
            step: '' ,
        }
    },
})