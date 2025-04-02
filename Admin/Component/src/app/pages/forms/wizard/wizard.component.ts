import { Component } from '@angular/core';

import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {

  items: MenuItem[] = [];
  breadCrumbItems!: Array<{}>;
  personalInformation: any;

  submitted: boolean = false;

  constructor(private router:Router){}

  ngOnInit() {
    /**
 * BreadCrumb
 */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Wizard', active: true }
    ];
    this.items = [
      { label: 'Step 1', routerLink: 'Step 1' },
      { label: 'Step 2', routerLink: 'Step 2' },
      { label: 'Step 3', routerLink: 'Step 3' }
    ];
  }

  nextPage() {
    // if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
    //     this.ticketService.ticketInformation.personalInformation = this.personalInformation;
        this.router.navigate(['steps/Step 1']);

    //     return;
  }

  // this.submitted = true;
  // }

}
