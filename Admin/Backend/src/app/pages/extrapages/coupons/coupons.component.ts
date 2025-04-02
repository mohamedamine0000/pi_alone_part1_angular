import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Coupen } from './coupons';
import { coupon } from './data';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})

// Coupan Component
export class CouponsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  products: any;
  endIndex: any = 10;
  first: any = 1;
  coupenDetail: any;
  viewdatasidebar!: boolean;
  editableModel!: boolean;
  coupenForm!: UntypedFormGroup;
  submitted = false;
  date!: Date;
  coupon!: Coupen;
  selectedProducts!: Coupen[];
  product: any;
  display!: boolean;
  row: any;
  econtent: any;
  removeIds: any;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    // Breadcrumb iteam
    this.breadCrumbItems = [
      { label: 'Toner' },
      { label: 'Coupons', active: true }
    ];

    /**
     * Form Validation
     */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      couponTitle: ['', [Validators.required]],
      code: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });

    // Fetch Datas
    this.products = coupon;
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

  // Sorting
  onSortChange(event: any) {
    let value = event.target.value;
    if (value == 'low_to_high') {
      this.products.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value == 'high_to_low') {
      this.products.sort((a: any, b: any) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      this.products = coupon;
    }
  }

  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }

  // modal
  showPositionDialog() {
    this.editableModel = true;
  }

  // View Coupen Detail
  viewDetail(coupens: any) {
    this.viewdatasidebar = true
    this.coupenDetail = this.products[coupens]
  }

  /**
 * Form data get
 */
  get form() {
    return this.coupenForm.controls;
  }

  //Edit 
  editProduct(coupon: any) {
    this.editableModel = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Update Coupon';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Update Coupon";
    }, 0);
    var coupon = this.products[coupon]
    this.coupenForm.controls['id'].setValue(coupon.id)
    this.coupenForm.controls['couponTitle'].setValue(coupon.couponTitle);
    this.coupenForm.controls['code'].setValue(coupon.code);
    this.coupenForm.controls['productType'].setValue(coupon.productType);
    this.coupenForm.controls['startDate'].setValue(coupon.startDate);
    this.coupenForm.controls['endDate'].setValue(coupon.endDate);
    this.coupenForm.controls['discount'].setValue(coupon.discount);
    this.coupenForm.controls['status'].setValue(coupon.status);
  }

  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('id')?.value) {
        this.products = coupon.map((coupon: { id: any; }) => coupon.id === this.coupenForm.get('id')?.value ? { ...coupon, ...this.coupenForm.value } : coupon);
        this.editableModel = false;
      } else {
        const couponTitle = this.coupenForm.get('couponTitle')?.value
        const code = this.coupenForm.get('code')?.value
        const productType = this.coupenForm.get('productType')?.value
        const startDate = this.coupenForm.get('startDate')?.value
        const endDate = this.coupenForm.get('endDate')?.value
        const discount = this.coupenForm.get('discount')?.value
        const status = this.coupenForm.get('status')?.value
        coupon.push({
          id: this.products.length + 1,
          couponTitle,
          code,
          productType,
          startDate,
          endDate,
          discount,
          status
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

  // Delete Record
  deleteRecord() {
    this.products.splice(this.removeIds, 1)
    this.display = false;
  }
}



