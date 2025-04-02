import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { currancy } from './data';
import { Currancy } from './currancy';

@Component({
  selector: 'app-currancy-rates',
  templateUrl: './currancy-rates.component.html',
  styleUrls: ['./currancy-rates.component.scss']
})
export class CurrancyRatesComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  first: any = 1;
  products: any;
  endIndex: any = 10;
  customerService: any;
  customers: any;
  loading!: boolean;
  editableModel!: boolean;
  deleteModel!: boolean;
  removeIds: any;
  coupenForm!: UntypedFormGroup;
  submitted!: boolean;
  index!: {};
  currancy!: Currancy;
  selectedProducts!: Currancy[];

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Toner' },
      { label: 'Currency Rates', active: true }
    ];

    // fatch data
    this.products = currancy

    /**
 * Form Validation
 */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      currencyName: ['', [Validators.required]],
      usd: ['', [Validators.required]],
      type: ['', [Validators.required]],
      exchangeRate: ['', [Validators.required]]
    });
  }
  // modal
  showPositionDialog() {
    this.editableModel = true;
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
    this.customerService.getCustomersLarge().then((customers: any) => {
      this.customers = customers;
      this.loading = false;
      this.customers.forEach((customer: { date: string | number | Date; }) => customer.date = new Date(customer.date));
    });
  }


  // Delete Record
  deleteRecord() {
    this.products.splice(this.removeIds, 1)
    this.deleteModel = false;
  }

  //Edit 
  editProduct(currancy: any) {
    this.editableModel = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit Currancy';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Update Currancy";
    }, 0);
    var currancy = this.products[currancy]
    this.coupenForm.controls['_id'].setValue(currancy.id)
    this.coupenForm.controls['currencyName'].setValue(currancy.currencyName);
    this.coupenForm.controls['usd'].setValue(currancy.usd);
    this.coupenForm.controls['type'].setValue(currancy.type);
    this.coupenForm.controls['exchangeRate'].setValue(currancy.exchangeRate);

  }
  // form data get
  get form() {
    return this.coupenForm.controls;
  }

  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('_id')?.value) {
        this.products = currancy.map((currancy: { id: any; }) => currancy.id === this.coupenForm.get('_id')?.value ? { ...currancy, ...this.coupenForm.value } : currancy);
        this.editableModel = false;
      } else {
        const currencyName = this.coupenForm.get('currencyName')?.value
        const usd = this.coupenForm.get('usd')?.value
        const type = this.coupenForm.get('type')?.value
        const exchangeRate = this.coupenForm.get('exchangeRate')?.value

        currancy.push({
          id: this.products.length + 1,
          currencyName,
          usd,
          type,
          exchangeRate
        })
        this.editableModel = false;
      }
    } else {
      this.submitted = true
      document.getElementById('alert-error-msg')?.classList.remove('d-none')
      this.formvalidation()
    }
  }
  formvalidation() {
    if (this.coupenForm.get('title')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a coupon title";
      return false;
    }
    if (this.coupenForm.get('code')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a coupon code";
      return false;
    }
    if (this.coupenForm.get('type')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a product type";
      return false;
    }
    if (this.coupenForm.get('startDate')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  startDate";
      return false;
    }
    if (this.coupenForm.get('endDate')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  endDate";
      return false;
    }
    if (this.coupenForm.get('discount')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  discount";
      return false;
    }
    if (this.coupenForm.get('status')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  status";
      return false;
    }
    return true;
  }

}
