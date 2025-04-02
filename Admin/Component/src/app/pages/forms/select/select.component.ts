import { Component } from '@angular/core';

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  breadCrumbItems!: Array<{}>;
  choices: any = [];
  values: any;
  uniquevalues: any;
  disablevalues: any;
  groupedCities!: any[];

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form Select', active: true }
    ];

    this.choices = [
      { name: 'Choice 1', code: 'AU' },
      { name: 'Choice 2', code: 'BR' },
      { name: 'Choice 3', code: 'CN' },
      { name: 'Choice 4', code: 'EG' }
    ];

    this.values = ['Task-1']
    this.uniquevalues = ['Project-A', 'Project-B']
    this.disablevalues = ['josh@joshuajohnson.co.uk', 'joe@bloggs.co.uk']

    this.groupedCities = [
      {
        label: 'UK', value: 'UK',
        items: [
          { label: 'London', value: 'London' },
          { label: 'Manchester', value: 'Manchester' },
          { label: 'Liverpool', value: 'Liverpool' }
        ]
      },
      {
        label: 'FR', value: 'FR',
        items: [
          { label: 'Paris', value: 'Paris' },
          { label: 'Lyon', value: 'Lyon' },
          { label: 'Marseille', value: 'Marseille' }
        ]
      },
      {
        label: 'DE', value: 'DE',
        items: [
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
          { label: 'Berlin', value: 'Berlin' }
        ]
      },
      {
        label: 'US', value: 'US',
        items: [
          { label: 'New York', value: 'New York' },
          { label: 'Washington', value: 'Washington' },
          { label: 'Michigan', value: 'Michigan' }
        ]
      },
      {
        label: 'SP', value: 'SP',
        items: [
          { label: 'Madrid', value: 'Madrid' },
          { label: 'Barcelona', value: 'Barcelona' },
          { label: 'Malaga', value: 'Malaga' }
        ]
      },
      {
        label: 'CA', value: 'CA',
        items: [
          { label: 'Montreal', value: 'Montreal' },
          { label: 'Toronto', value: 'Toronto' },
          { label: 'Vancouver', value: 'Vancouver' }
        ]
      }
    ];
  }

}
