import {defineComponent} from "vue";

export default defineComponent({
    data() {
        return {
            featherColor: 'blue',
            eyeColor: 'blue',
            sunColor: 'blue',
        }
    },
    methods: {
        changeFeatherColor() {
            this.featherColor === "blue" ? this.featherColor = "white" : this.featherColor = "blue"
        },
        changeEyeColor() {
            this.eyeColor === "blue" ? this.eyeColor = "white" : this.eyeColor = "blue"
        },
        changeSunColor() {
            this.sunColor === "blue" ? this.sunColor = "white" : this.sunColor = "blue"
        },

    }
})