import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { shipment } from './data';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent {
  date!: Date;
  date1!: Date;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  first: any;
  products: any;
  endIndex: any;
  customerService: any;
  customers: any;
  loading!: boolean;
  displayPosition!: boolean;
  display!: boolean;
  coupenForm!: UntypedFormGroup;
  submitted!: boolean;
  removeIds: any
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Toner' },
      { label: 'Shipments', active: true }
    ];

    this.products = shipment

    /**
* Form Validation
*/
    this.coupenForm = this.formBuilder.group({
      _id: [''],  
      customer_name: ['', [Validators.required]],
      supplier: ['', [Validators.required]],
      location: ['', [Validators.required]],
      order_date: ['', [Validators.required]],
      arrival_date: ['', [Validators.required]],
      status: ['', [Validators.required]],

    });
  }
  // modal
  showPositionDialog() {
    this.displayPosition = true;
  }

  // delete
  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
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
  editProduct(shipment: any) {
    this.displayPosition = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit seller details';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = 'Save';
    }, 0);
    var shipment = this.products[shipment]
    this.coupenForm.controls['_id'].setValue(shipment.id)
    this.coupenForm.controls['customer_name'].setValue(shipment.customer_name);
    this.coupenForm.controls['supplier'].setValue(shipment.supplier);
    this.coupenForm.controls['location'].setValue(shipment.location);
    this.coupenForm.controls['order_date'].setValue(shipment.order_date);
    this.coupenForm.controls['arrival_date'].setValue(shipment.arrival_date);
    this.coupenForm.controls['status'].setValue(shipment.status);
  }


  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('_id')?.value) {
        this.products = shipment.map((shipment: { id: any; }) => shipment.id === this.coupenForm.get('_id')?.value ? { ...shipment, ...this.coupenForm.value } : shipment);
        this.displayPosition = false;
      } else {
        const shipment_no = this.coupenForm.get('shipment_no')?.value
        const customer_name = this.coupenForm.get('customer_name')?.value
        const supplier = this.coupenForm.get('supplier')?.value
        const location = this.coupenForm.get('location')?.value
        const order_date = this.coupenForm.get('order_date')?.value
        const arrival_date = this.coupenForm.get('arrival_date')?.value
        const status = this.coupenForm.get('status')?.value

        shipment.push({
          id: this.products.length + 1,
          shipment_no,
          customer_name,
          supplier,
          location,
          order_date,
          arrival_date,
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

  // Delete Record
  deleteRecord() {
    this.products.splice(this.removeIds, 1)
    this.display = false;
  }
  formvalidation() {
    if (this.coupenForm.get('customer_name')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a customer name";
      return false;
    }
    if (this.coupenForm.get('supplier')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a web url";
      return false;
    }
    if (this.coupenForm.get('location')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  number of stocks";
      return false;
    }
    if (this.coupenForm.get('order_date')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  revenue";
      return false;
    }
    if (this.coupenForm.get('arrival_date')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  revenue";
      return false;
    }
    if (this.coupenForm.get('status')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  revenue";
      return false;
    }
    return true;
  }

}
