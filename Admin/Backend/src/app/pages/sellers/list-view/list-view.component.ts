import { Component } from '@angular/core';
// Data Get
import { sellerview } from './data';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})


export class ListViewComponent {
  date!: Date
  first: any;
  products: any;
  endIndex: any;
  customerService: any;
  customers: any;
  loading!: boolean;
  rangeValues: number[] = [0, 2000];
  range1: any;
  range2: any;
  display!: boolean;
  displayPosition!: boolean;
  content: any;
  checkedValGet: any;
  row: any;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  coupenForm!: UntypedFormGroup;
  submitted!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Sellers' },
      { label: 'List View', active: true }
    ];

    this.range1 = '$ ' + this.rangeValues[0]
    this.range2 = '$ ' + this.rangeValues[1]

    // Fetch Data
    this.products = sellerview;

    /**
     * Form Validation
     */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      sellerName: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      balance: ['', [Validators.required]],
      email: ['', [Validators.required]],
      createdate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      status: ['', [Validators.required]],

    });
  }
  // delete
  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }
  /**
 * Form data get
 */
  get form() {
    return this.coupenForm.controls;
  }
  // Range Slider
  handleChange(e: any) {
    this.range1 = '$ ' + e.values[0]
    this.range2 = '$ ' + e.values[1]
  }

  // modal
  showPositionDialog() {
    this.displayPosition = true;
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

  //Edit 
  editProduct(sellerview: any) {
    this.displayPosition = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit Seller';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Update";
    }, 0);
    var sellerview = this.products[sellerview]
    this.coupenForm.controls['_id'].setValue(sellerview.id)
    this.coupenForm.controls['sellerName'].setValue(sellerview.sellerName);
    this.coupenForm.controls['stock'].setValue(sellerview.stock);
    this.coupenForm.controls['balance'].setValue(sellerview.balance);
    this.coupenForm.controls['email'].setValue(sellerview.email);
    this.coupenForm.controls['phone'].setValue(sellerview.phone);
    this.coupenForm.controls['createdate'].setValue(sellerview.createdate);
    this.coupenForm.controls['status'].setValue(sellerview.status);
  }

  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('_id')?.value) {
        this.products = sellerview.map((sellerview: { id: any; }) => sellerview.id === this.coupenForm.get('_id')?.value ? { ...sellerview, ...this.coupenForm.value } : sellerview);
        this.displayPosition = false;
      } else {
        const sellerName = this.coupenForm.get('sellerName')?.value
        const stock = this.coupenForm.get('stock')?.value
        const balance = this.coupenForm.get('balance')?.value
        const email = this.coupenForm.get('email')?.value
        const phone = this.coupenForm.get('phone')?.value
        const createdate = this.coupenForm.get('createdate')?.value
        const status = this.coupenForm.get('status')?.value

        sellerview.push({
          id: this.products.length + 1,
          sellerName,
          stock,
          balance,
          email,
          phone,
          createdate,
          status
        })
        this.displayPosition = false;
      }
    } else {
      this.submitted = true
      document.getElementById('alert-error-msg')?.classList.remove('d-none')
      this.formvalidation()
    }
  }

  formvalidation() {
    if (this.coupenForm.get('sellerName')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a seller name";
      return false;
    }
    if (this.coupenForm.get('stock')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a item stock";
      return false;
    }
    if (this.coupenForm.get('balance')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a balance";
      return false;
    }
    if (this.coupenForm.get('email')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  valid email address";
      return false;
    }
    if (this.coupenForm.get('createdate')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  createdate";
      return false;
    }
    if (this.coupenForm.get('phone')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  phone";
      return false;
    }
    if (this.coupenForm.get('status ')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please select a status";
      return false;
    }
    return true;
  }

  // Delete Record
  deleteRecord() {
    this.products.splice(this.removeIds, 1)
    this.display = false;
  }
  removeIds(removeIds: any, arg1: number) {
    throw new Error('Method not implemented.');
  }
}
