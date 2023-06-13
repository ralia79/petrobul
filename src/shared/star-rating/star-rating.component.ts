import {defineComponent} from "vue";

export default defineComponent({
    props: {
        'name': String,
        'value': null,
        'id': String,
        'disabled': Boolean,
        'required': Boolean
    },

    data() {
        return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        star_over(index: number) {
            if (!this.disabled) {
                this.temp_value = this.value;
                // @ts-ignore
                return this.value = index;
            }

        },

        star_out() {
            if (!this.disabled) {
                // @ts-ignore
                return this.value = this.temp_value;
            }
        },


        set(value: any) {
            if (!this.disabled) {
                this.temp_value = value;
                // @ts-ignore
                return this.value = value;
            }
        }
    }

})