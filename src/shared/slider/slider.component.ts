import Component from 'vue-class-component';
import {Vue , Inject} from 'vue-property-decorator';
// @ts-ignore
import {Carousel, Slide} from 'vue-carousel';
import SliderService from "@/shared/slider/slider.service";

@Component({
    components: {
        Carousel,
        Slide
    }
})
export default class SliderComponent extends Vue {
    @Inject('sliderService')
    private sliderService!: () => SliderService;
    private SliderData = [];

    async mounted() {
        const res = await this.sliderService().getAllReviews();
        console.log(res)
    }


}