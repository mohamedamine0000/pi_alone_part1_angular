import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  text!: string
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  formGroup!: FormGroup;

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Create Product', active: true }
    ];
    this.formGroup = new FormGroup({
      values: new FormControl<string[] | null>(null)
    });
  }

}
