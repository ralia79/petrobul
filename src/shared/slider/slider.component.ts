import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';
// @ts-ignore
import {Carousel, Slide} from 'vue-carousel';
// @ts-ignore
import axios from "axios";

@Component({
    components: {
        Carousel,
        Slide
    }
})
export default class SliderComponent extends Vue {
    // @ts-ignore

    private innerStyles = {};
    private step = '';
    private SliderData = [];
    private placeId = 'ChIJ9TDpcNk8v0cRvZellHm-AyE';
    private apikey = 'AIzaSyD8hsEOsgequMzGwz3N3jxQd3ZtGEn1-ho';

    async mounted() {
        await this.getSliderData();
    }


    async getSliderData() {
        axios.get(`https://mybusiness.googleapis.com/v4/accounts/${this.apikey}/locations/${this.placeId}/reviews`)
            .then((res: { data: any; }) => {
                console.log(res)
            })
            .catch((err: { data: any; }) => {
                console.log(err)
            })
    }
}