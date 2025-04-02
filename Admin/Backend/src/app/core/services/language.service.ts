import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  public languages: string[] = ['en', 'sp', 'de', 'it', 'ru','ch','fr','ar'];

  constructor(public translate: TranslateService, private cookieService: CookieService) {

    let browserLang:any;
    /**
     * cookie Language Get
    */
    this.cookieService.set('lang', 'en');
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/ar|ch|en|fr|de|it|ru|sp/) ? browserLang : 'en');
  }

  /**
   * Cookie Language set
   */
  public setLanguage(lang: any) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
  }

}
