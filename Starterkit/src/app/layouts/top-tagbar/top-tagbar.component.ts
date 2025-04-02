import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-top-tagbar',
  templateUrl: './top-tagbar.component.html',
  styleUrls: ['./top-tagbar.component.scss']
})
export class TopTagbarComponent {

  country: any;
  cookieValue: any;
  selectedCountry: any;
  flagvalue: any;
  valueset: any;
  countryName: any;
  userData: any;


  constructor(public languageService: LanguageService, public _cookiesService: CookieService) { }

  ngOnInit(): void {

    // top-tagbar current time

    // date
    var d = new Date();
    var dateOptions = { weekday: 'short', month: 'short', dateStyle: 'short' };
    var date = d.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    // time
    var hours = d.getHours();
    var ampm = hours >= 12 ? ' PM' : ' AM';
    var hours = hours % 12;
    var time = ("0" + hours).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ampm;

    var showdate = document.getElementById('current-time') as HTMLAreaElement;
    showdate.innerHTML = date + " | " + time;


    // Language Listing
    this.country = [
      { label: 'English', value: 'assets/images/flags/us.svg', code: 'en' },
      { label: 'Española', value: 'assets/images/flags/spain.svg', code: 'es' },
      { label: 'Deutsche', value: 'assets/images/flags/germany.svg', code: 'de' },
      { label: 'Italiana', value: 'assets/images/flags/italy.svg', code: 'it' },
      { label: 'русский', value: 'assets/images/flags/russia.svg', code: 'ru' },
      { label: '中国人', value: 'assets/images/flags/china.svg', code: 'ch' },
      { label: 'français', value: 'assets/images/flags/french.svg', code: 'fr' },
      { label: 'عربى', value: 'assets/images/flags/sa.svg', code: 'ar' }
    ];
    this.selectedCountry = this.country.find((country: any) => country.code === 'en');

    // Cookies wise Language set
    this.cookieValue = this._cookiesService.get('lang');

  }
  /***
  * Language Value Set
  */
  setLanguage(selectedCountryValue: any) {
    console.log(selectedCountryValue);
    this.cookieValue = selectedCountryValue;
    this.languageService.setLanguage(selectedCountryValue);
    // Additional logic as needed
    this.selectedCountry = this.country.find((country: any) => country.code === selectedCountryValue);
  }

}
