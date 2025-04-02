import { Component } from '@angular/core';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss']
})
export class DatatablesComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Tables' },
       { label: 'Datatables', active: true }
     ];
}
}
