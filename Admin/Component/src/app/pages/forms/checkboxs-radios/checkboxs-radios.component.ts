import { Component } from '@angular/core';

@Component({
  selector: 'app-checkboxs-radios',
  templateUrl: './checkboxs-radios.component.html',
  styleUrls: ['./checkboxs-radios.component.scss']
})
export class CheckboxsRadiosComponent {
  breadCrumbItems!: Array<{}>;

  checked: boolean = true;
  unchecked: boolean = false;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Forms' },
       { label: 'Checkboxes & Radios', active: true }
     ];
}
}
