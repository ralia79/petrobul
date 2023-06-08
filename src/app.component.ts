import Vue from 'vue';
import Component from 'vue-class-component';
import AppBar from "@/core/appbar/appbar.vue";
import CustomFooter from "@/core/custom-footer/custom-footer.vue";
import CookieDialog from "@/core/cookie/cookie-dialog.vue";

@Component({
    components: {
        AppBar,
        CustomFooter ,
        CookieDialog
    },
})
export default class App extends Vue {


}
