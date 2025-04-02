import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface City {
  label: string,
}
@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class DropdownsComponent {

  country: City[];
  countries: any;
  groupedCities: any[];
  action: { label: string; }[];
  splitdropdown!: MenuItem[];
  optionsArray: any;
  lang: { name: string; }[];
  selectedCity: any;
  selectedCountry: any;

  constructor() {
    this.country = [
      { label: 'Action' },
      { label: 'Another action' },
      { label: 'Something else here' },
    ];
    this.action = [
      { label: 'Action' },
      { label: 'Another action' },
      { label: 'Something else here' },
      { label: 'Seperate link' },
    ];
    this.groupedCities = [
      {
          label: 'Germany',
          value: 'de',
          items: [
              { label: 'Berlin', value: 'Berlin' },
              { label: 'Frankfurt', value: 'Frankfurt' },
              { label: 'Hamburg', value: 'Hamburg' },
              { label: 'Munich', value: 'Munich' }
          ]
      },
      {
          label: 'USA',
          value: 'us',
          items: [
              { label: 'Chicago', value: 'Chicago' },
              { label: 'Los Angeles', value: 'Los Angeles' },
              { label: 'New York', value: 'New York' },
              { label: 'San Francisco', value: 'San Francisco' }
          ]
      },
      {
          label: 'Japan',
          value: 'jp',
          items: [
              { label: 'Kyoto', value: 'Kyoto' },
              { label: 'Osaka', value: 'Osaka' },
              { label: 'Tokyo', value: 'Tokyo' },
              { label: 'Yokohama', value: 'Yokohama' }
          ]
      }
    ];
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
  ];
    this.lang = [
      { name: "HTML" },
      { name: "ReactJS" },
      { name: "Angular" },
      { name: "Bootstrap" },
      { name: "PrimeNG" },
    ];
    this.splitdropdown = [
      { label: 'Angular' },
      { label: 'PrimeNG' },
      { label: 'SplitButton' }
    ];
   
    
  }
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Dropdowns', active: true }
    ];
  }
}


