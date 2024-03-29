import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import VueCookies from 'vue-cookies'
import SliderService from "@/shared/slider/slider.service";
import ChartSectionService from '@/core/home/chart-section/chart-section.service'
import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.use(VueCookies);
new Vue({
    router,
    vuetify,
    provide: {
        sliderService: () => new SliderService(),
        chartSectionService: () => new ChartSectionService(),
    },
    render: h => h(App)
}).$mount('#app')