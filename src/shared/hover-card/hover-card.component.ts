import {defineComponent} from "vue";

export default defineComponent({
    props: ["title", "caption"],
    data() {
        return {
            iconImage: require('@/assets/img/eye-blue.svg'),
            showCaption: false,
        }
    },

    methods: {
        hover() {
            this.iconImage = require('@/assets/img/feather-white.svg');
            this.showCaption = true;
        },
        unHover() {
            this.iconImage = require('@/assets/img/eye-blue.svg');
            this.showCaption = false;
        },
    }
})