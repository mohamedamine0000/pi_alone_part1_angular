import { Component } from '@angular/core';
import { transaction } from './data';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  first: any = 1;
  products: any;
  endIndex: any = 10;
  customerService: any;
  customers: any;
  loading!: boolean;
  viewdatasidebar!: boolean;
  transactions: any;
  editableModel!: boolean;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  coupenDetail: any;
  coupenForm: any;


  constructor(private formBuilder: UntypedFormBuilder) { }
  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Toner' },
      { label: 'Transactions', active: true }
    ];
    // fatch data
    this.products = transaction
    this.transactions = this.products[0]
  }

  // View Coupen Detail
  viewDetail(coupens: any) {
    this.transactions = this.products[coupens]

    /**
   * Form Validation
   */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      type: ['', [Validators.required]],
      transactionID: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      img: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      transactionDate: ['', [Validators.required]],
      status: ['', [Validators.required]],
      clientName: ['', [Validators.required]],
      clientEmail: ['', [Validators.required]],
      vatId: ['', [Validators.required]],
    });

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

  transaction() {
    this.editableModel = true
  }


  saveCoupen() {
    if (this.coupenForm.valid) {
      const type = this.coupenForm.get('type')?.value
      const transactionID = this.coupenForm.get('transactionID')?.value
      const amount = this.coupenForm.get('amount')?.value
      const img = this.coupenForm.get('img')?.value
      const paymentMethod = this.coupenForm.get('paymentMethod')?.value
      const transactionDate = this.coupenForm.get('transactionDate')?.value
      const status = this.coupenForm.get('status')?.value
      const clientName = this.coupenForm.get('clientName')?.value
      const clientEmail = this.coupenForm.get('clientEmail')?.value
      const vatId = this.coupenForm.get('vatId')?.value
      transaction.push({
        id: this.products.length + 1,
        type,
        transactionID,
        amount,
        img,
        paymentMethod,
        transactionDate,
        status,
        clientName,
        clientEmail,
        vatId
      })
    }
    this.editableModel = false;
  }

}


