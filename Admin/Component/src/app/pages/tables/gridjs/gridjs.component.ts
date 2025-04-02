import { Component } from '@angular/core';

// Data Get
import { gridtable } from './data';

@Component({
  selector: 'app-gridjs',
  templateUrl: './gridjs.component.html',
  styleUrls: ['./gridjs.component.scss']
})
export class GridjsComponent {
  breadCrumbItems!: Array<{}>;
  tablelist: any;
  first: any = 1;
  endIndex: any = 5;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'Grid Js', active: true }
    ];

    // Fetch Data
    this.tablelist = gridtable
  }

  // Pagination
  onPageChange(event: any) {
    this.first = event.first + 1;
    if (this.tablelist.length > 0) {
      var last = this.first + event.rows
      if (last <= this.tablelist.length) {
        this.endIndex = event.first + event.rows
      } else {
        this.endIndex = this.tablelist.length
      }
    }
  }
}
