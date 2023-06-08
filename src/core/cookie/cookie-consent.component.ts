import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';

const COOKIE_NAME = 'end-dsgvo';

@Component
export default class CookieConsent extends Vue {
  public showCookie = false;

  public mounted(): void {
    this.showCookie = !this.$cookies.isKey(COOKIE_NAME);
  }

  public setCookieAndClose(): void {
    this.showCookie = false;

    this.$cookies.set(COOKIE_NAME, 'accepted', '', '', '', false, 'strict');
  }
}
