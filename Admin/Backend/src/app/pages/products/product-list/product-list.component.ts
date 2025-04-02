import { Component } from '@angular/core';

// Data Get
import { productlist } from './data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

/**
 * ProductList Component
 */
export class ProductListComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  products: any;
  first: number = 1;
  endIndex: number = 10;
  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;
  coupenForm: any;
  display!: boolean;
  removeIds: any;

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Product List', active: true }
    ];

    this.range1 = '$ ' + this.rangeValues[0]
    this.range2 = '$ ' + this.rangeValues[1]

    // Fetch Data
    this.products = productlist
  }

  // delete
  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
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

  // Delete Record
  deleteRecord() {
    this.products.splice(this.removeIds, 1)
    this.display = false;
  }
}

