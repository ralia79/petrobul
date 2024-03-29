import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import HomeView from '@/core/home/home.vue'
import AboutUs from '@/core/about-us/about-us.vue'
import ContactUs from '@/core/contact-us/contact-us.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/uber-uns',
        component: AboutUs
    },
    {
        path: '/kontakt',
        component: ContactUs
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({x: 0, y: 0}),
    routes
})

export default router
