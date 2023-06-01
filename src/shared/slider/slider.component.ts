import {defineComponent} from "vue";

export default defineComponent({
    props: ["sliderData"],
    data() {
        return {
            innerStyles: {},
            step: ''
        }
    },

    mounted() {
        this.setStep()
    },

    methods: {
        setStep() {
            const innerWidth = document.getElementsByClassName('inner')[0].scrollWidth
            const totalCards = this.sliderData.length
            this.step = `${innerWidth / totalCards}px`
        },

        next() {
            this.moveLeft()
                const card = this.sliderData.shift()
                this.sliderData.push(card)
                this.resetTranslate()
        },
        resetTranslate () {
            this.innerStyles = {
                transition: 'none',
                transform: 'translateX(0)'
            }
        } ,
        moveLeft() {
            this.innerStyles = {
                transform: `translateX(-${this.step})`
            }
        }
    }
})