import { Component } from '@angular/core';

import { productgrid } from './data';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  products: any;
  first: number = 1;
  endIndex: number = 6;
  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;

  sortOptions: any;
  sortOrder: any;
  sortField: any;

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Product Grid', active: true }
    ];

    // Fetch Data
    this.range1 = '$ ' + this.rangeValues[0]
    this.range2 = '$ ' + this.rangeValues[1]
    this.products = productgrid;
  }

  // Range Slider
  handleChange(e: any) {
    this.range1 = '$ ' + e.values[0]
    this.range2 = '$ ' + e.values[1]
  }

  // Pagination
  onPageChange(event: any) {
    this.first = event.first + 1;
    if (this.products.length > 0) {
      var last = this.first + event.rows
      if (last <= this.products.length) {
        this.endIndex = event.first + event.rows
      } else {
        this.endIndex = this.products.length
      }
    }
  }

  // Sorting
  onSortChange(event: any) {
    let value = event.target.value;
    if (value == 'low_to_high') {
      this.products.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value == 'high_to_low') {
      this.products.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      this.products = productgrid;
    }
  }
}
