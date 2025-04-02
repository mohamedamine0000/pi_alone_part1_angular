import { Component } from '@angular/core';

// Data Get
import { cartData } from './data';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  cartList: any;
  
  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Orders' },
      { label: 'Overview', active: true }
    ];

    // Fetch Data
    this.cartList = cartData
  }

}
