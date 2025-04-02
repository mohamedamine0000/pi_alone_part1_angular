import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// Data Get
import { orderlist } from './data';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

// list-view component

export class ListViewComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  // date
  rangeDates!: Date[];
  products: any;
  first: number = 1;
  endIndex: number = 10;
  rangeValues: number[] = [0, 2000];
  customerService: any;
  customers: any;
  loading!: boolean;
  selectedDate!: Date;
  // modal
  displayBasic!: boolean;
  position!: string;
  displayPosition!: boolean;
  removeIds: any;
  display!: boolean;
  coupenForm!: UntypedFormGroup;
  submitted!: boolean;
  row: any;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Orders' },
      { label: 'List-view', active: true }
    ];

    // Fetch Data
    this.products = orderlist

    /**
     * Form Validation
     */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      name: ['', [Validators.required]],
      deliverydate: ['', [Validators.required]],
      amt: ['', [Validators.required]],
      title: ['', [Validators.required]],
      paymethod: ['', [Validators.required]],
      status: ['', [Validators.required]],
      orderdate: [new Date()],
    });
  }
  // show dialog
  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }


  // modal
  showPositionDialog() {
    this.displayPosition = true;
  }

  /**
 * Form data get
 */
  get form() {
    return this.coupenForm.controls;
  }

  //Edit 
  editProduct(orderlist: any) {
    this.displayPosition = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit Order';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Update Coupon";
    }, 0);
    var orderlist = this.products[orderlist]
    this.coupenForm.controls['_id'].setValue(orderlist.id)
    this.coupenForm.controls['name'].setValue(orderlist.name);
    this.coupenForm.controls['deliverydate'].setValue(orderlist.deliverydate);
    this.coupenForm.controls['amt'].setValue(orderlist.amt);
    this.coupenForm.controls['title'].setValue(orderlist.title);
    this.coupenForm.controls['paymethod'].setValue(orderlist.paymethod);
    this.coupenForm.controls['status'].setValue(orderlist.status);
    this.coupenForm.controls['orderdate'].setValue(orderlist.selectedDate);
  }

  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('_id')?.value) {
        this.products = orderlist.map((orderlist: { id: any; }) => orderlist.id === this.coupenForm.get('_id')?.value ? { ...orderlist, ...this.coupenForm.value } : orderlist);
        this.displayPosition = false;
      } else {
        const name = this.coupenForm.get('name')?.value
        const deliverydate = this.coupenForm.get('deliverydate')?.value
        const amt = this.coupenForm.get('amt')?.value
        const title = this.coupenForm.get('title')?.value
        const paymethod = this.coupenForm.get('paymethod')?.value
        const status = this.coupenForm.get('status')?.value
        const orderdate = this.coupenForm.get('orderdate')?.value

        orderlist.push({
          id: this.products.length + 1,
          name,
          deliverydate,
          amt,
          title,
          paymethod,
          status,
          orderdate
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

    if (this.coupenForm.get('name')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a seller name";
      return false;
    }
    if (this.coupenForm.get('deliverydate')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a deliverydate";
      return false;
    }
    if (this.coupenForm.get('amt')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  amount";
      return false;
    }
    if (this.coupenForm.get('title')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  titles";
      return false;
    }
    if (this.coupenForm.get('paymethod')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  paymethod";
      return false;
    }
    if (this.coupenForm.get('status')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  status";
      return false;
    }
    if (this.coupenForm.get('orderdate')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  orderdate";
      return false;
    }
    return true;
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
    this.display = false;
  }
}
