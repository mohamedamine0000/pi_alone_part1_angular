import { Component } from '@angular/core';

// Get Data
import { countrylist } from './data';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent {
  breadCrumbItems!: Array<{}>;

  countries: any;
  selectedCountry: any;
  selectedCountry1: any;
  selectedCountry2: any;
  selectedCountry3: any;
  selectedCountry4: any;
  selectedfriut: any;
  fruits: any;
  cars: any;
  cargroup: any;
  filteredCountries!: any[];
  list1: any;
  list2: any;
  carlist1: any;
  carlist2: any;
  grouplist1: any;
  grouplist2: any;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Forms' },
       { label: 'Form Advanced', active: true }
     ];
    
    this.countries = countrylist;

    this.selectedCountry3={
      "id": 240,
      "flagImg": "assets/images/flags/us.svg",
      "countryName": "United States of America",
      "countryCode": "+1"
    }
      
    this.selectedCountry4 = {
      "id": 240,
      "flagImg": "assets/images/flags/us.svg",
      "countryName": "United States of America",
      "countryCode": "+1"
    }
    
    this.fruits = [
      { 'name': 'Apple' },
      {'name':'Banana'},
      { 'name': 'Blueberry' },
      { 'name': 'Cherry' },
      { 'name': 'Coconut' },
      { 'name': 'Kiwi' },
      { 'name': 'Lemon' },
      { 'name': 'Lime' },
      { 'name': 'Mango' },
      { 'name': 'Orange' }
    ]

    this.cars = [
      {'name':'Chevrolet'},
      {'name':'Fiat'},
      {'name':'Ford'},
      {'name':'Honda'},
      {'name':'Hyundai'},
      {'name':'Hyundai'},
      {'name':'Kia'},
      {'name':'Mahindra'},
      {'name':'Maruti'},
      {'name':'Mitsubishi'},
      {'name':'MG'},
      {'name':'Nissan'},
      {'name':'Renault'},
      {'name':'Skoda'},
      {'name':'Tata'},
      {'name':'Toyato'},
      {'name':'Volkswagen'}
    ]

    this.cargroup = [
      {
        id: '1',
        name: 'skoda',
        children: [
          {
            name:'Kushaq'
          },
          {
            name:'Superb'
          },
          {
            name:'Octavia'
          },
          {
            name:'Rapid'
          }
        ]
      },
      {
        id: '2',
        name: 'Volkswagen',
        children: [
          {
            name:'Polo'
          },
          {
            name:'Taigun'
          },
          {
            name:'Vento'
          }
        ]
      }
    ]

    this.list1 = this.fruits
    this.list2 = [];

    this.carlist1 = this.cars;
    this.carlist2 = [];

    this.grouplist1 = this.cargroup;
    this.grouplist2 = [];
  }

  // Default Increment
  quantity: any = 2;
  defaultincrese(id: any, qid: any) {
    if (id == '0' && this.quantity > 0) {
      this.quantity--
    }
    if (id == '1'){
      this.quantity++
    }
    (document.getElementById('quantity' + qid) as HTMLInputElement).value = this.quantity;
  }

  // Auto Complete Fruit
  filterFruit(event:any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.fruits.length; i++) {
      let fruit = this.fruits[i];
        if (fruit.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          filtered.push(fruit);
        }
    }
    this.filteredCountries = filtered;
  }
  
  // Auto Complete Car
  filterCars(event: any) {
     //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
     let filtered : any[] = [];
     let query = event.query;
     for(let i = 0; i < this.cars.length; i++) {
       let car = this.cars[i];
         if (car.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
           filtered.push(car);
         }
     }
     this.filteredCountries = filtered;
  }
  
}