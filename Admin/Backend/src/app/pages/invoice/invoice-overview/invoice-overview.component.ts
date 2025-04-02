import { Component } from '@angular/core';

import { invoice } from '../invoice-listview/data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-interview-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class OverviewComponent {
  breadCrumbItems!: Array<{}>;
  productDetail = invoice;
  products: any;
  isImage: any;
  // print
  printPage() {
    window.print();
  }

  constructor(private route: ActivatedRoute) {
    this.products = this.route.snapshot.params
  }

  ngOnInit(): void {
    // breadcrumb
    this.breadCrumbItems = [
      { label: 'Invoices' },
      { label: 'Invoice Details', active: true }
    ];
  }
}
