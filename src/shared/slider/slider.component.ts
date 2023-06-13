import Component from 'vue-class-component';
import {Vue, Inject} from 'vue-property-decorator';
// @ts-ignore
import {Carousel, Slide} from 'vue-carousel';
import SliderService from "@/shared/slider/slider.service";
import {IReview, Review} from "@/shared/model/review.model";
@Component({
    components: {
        Carousel,
        Slide,
    }
})
export default class SliderComponent extends Vue {
    @Inject('sliderService') private sliderService!: () => SliderService;
    private reviews: IReview[] | null = null;
    private rating = 0;
    private user_ratings_total = 0;

    async mounted() {
        const res = await this.sliderService().getAllReviews();
        this.reviews ? res.reviews : new Review();
    }

}