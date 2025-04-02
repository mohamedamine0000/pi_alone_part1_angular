import { Component } from '@angular/core';
import { invoice } from './data';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-listview',
  templateUrl: './invoice-listview.component.html',
  styleUrls: ['./invoice-listview.component.scss']
})
export class InvoiceListviewComponent {
  value!: Date;
  sortField: any;
  sortOrder: number | undefined;
  endIndex: any = 8;
  products: any;
  first: any = 1;
  breadCrumbItems!: Array<{}>;
  display1!: boolean;
  removeIds: any;
  coupenForm!: UntypedFormGroup;
  deleteModel!: boolean;

  constructor(private router: Router, private formBuilder: UntypedFormBuilder) { }
  ngOnInit(): void {
    // Fetch Data
    this.products = invoice;

    // breadcrumb
    this.breadCrumbItems = [
      { label: 'Invoices' },
      { label: 'Invoice List', active: true }
    ];

    this.coupenForm = this.formBuilder.group({
      id: [''],
      currencyName: ['', [Validators.required]],
      usd: ['', [Validators.required]],
      type: ['', [Validators.required]],
      exchangeRate: ['', [Validators.required]]
    });
  }

  // Delete Record
  deleteRecord() {
    this.products.splice(this.removeIds, 1)
    this.deleteModel = false;
  }
  showPosition(id: any) {
    this.removeIds = id
    this.deleteModel = true
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


  viewDetail(id: any) {
    this.router.navigate(['/invoice/overview', this.products[id]])
  }

  editProduct(invoice: any) {
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit Currancy';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Update Currancy";
    }, 0);
    var invoice = this.products[invoice]
    this.coupenForm.controls['id'].setValue(invoice.id)
    this.coupenForm.controls['customer'].setValue(invoice.currencyName);
    this.coupenForm.controls['email'].setValue(invoice.email);
    this.coupenForm.controls['country'].setValue(invoice.country);
    this.coupenForm.controls['date'].setValue(invoice.date);
    this.coupenForm.controls['time'].setValue(invoice.time);
    this.coupenForm.controls['amt'].setValue(invoice.amt);
    this.coupenForm.controls['paystatus'].setValue(invoice.paystatus);


  }
  // Sorting
  onSortChange(event: any) {
    let value = event.target.value;
    if (value == 'low_to_high') {
      this.products.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value == 'high_to_low') {
      this.products.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      this.products = invoice;
    }
  }
}
