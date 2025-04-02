import { Component } from '@angular/core';



interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent {
  value1!: string;
  value2!: string;
  value3!: string;
  value4!: string;
  value5!: string;
  value6!: string;
  value7!: string;
  value8!: string;
  value9!: string;
  value10!: string;
  value11!: string;
  value12!: string;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checked: boolean = false;
  selectedValues: string[] = [];

  color2: string = "#364574";

  country: { label: string }[];
  action: { label: string; }[];
  customselect: { label: string; }[];
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
    this.customselect = [
      { label: 'Choose...' },
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ];
  }

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Forms' },
       { label: 'Basic Elements', active: true }
     ];
}
}