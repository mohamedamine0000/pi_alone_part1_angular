import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { userlist } from './data';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})



export class UserlistComponent {

  products: any;
  // breadcrumb
  breadCrumbItems: any;
  first: any = 1;
  endIndex: any = 10;
  editableModel!: boolean;
  display: boolean = false;
  formData: any;
  coupenForm: any;
  submitted!: boolean;
  removeIds: any;
  row: any;

  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // Fetch Datas
    this.products = userlist;

    // breadcrumb
    this.breadCrumbItems = [
      { label: 'Users List' },
      { label: 'Users List', active: true }
    ];
    /**
     * Form Validation
     */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      UserName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      img: ['', [Validators.required]],
    });
  }

  // modal
  showPositionDialog() {
    this.editableModel = true;
  }
  // form data get
  get form() {
    return this.coupenForm.controls;
  }

  //Edit 
  editProduct(userlist: any) {
    this.editableModel = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit User';
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Edit User";
    }, 0);
    var userlist = this.products[userlist]
    this.coupenForm.controls['_id'].setValue(userlist.id)
    this.coupenForm.controls['UserName'].setValue(userlist.UserName);
    this.coupenForm.controls['Email'].setValue(userlist.Email);
    this.coupenForm.controls['Date'].setValue(userlist.Date);
    this.coupenForm.controls['status'].setValue(userlist.status);
    this.coupenForm.controls['img'].setValue(userlist.img);
  }

  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('_id')?.value) {
        this.products = userlist.map((userlist: { id: any; }) => userlist.id === this.coupenForm.get('_id')?.value ? { ...userlist, ...this.coupenForm.value } : userlist);
        this.editableModel = false;
      } else {
        const UserName = this.coupenForm.get('UserName')?.value
        const Email = this.coupenForm.get('Email')?.value
        const Date = this.coupenForm.get('Date')?.value
        const status = this.coupenForm.get('status')?.value
        const img = this.coupenForm.get('img')?.value

        userlist.push({
          id: this.products.length + 1,
          UserName,
          Email,
          Date,
          status,
          img
        })
        this.editableModel = false;
      }
    } else {
      this.submitted = true
      document.getElementById('alert-error-msg')?.classList.remove('d-none')
      this.formvalidation()
    }
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
      this.products = userlist;
    }
  }

  // validation
  formvalidation() {
    if (this.coupenForm.get('UserName')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a username";
      return false;
    }
    if (this.coupenForm.get('Email')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a email";
      return false;
    }
    if (this.coupenForm.get('Date')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a date";
      return false;
    }
    if (this.coupenForm.get('status')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  status";
      return false;
    }
    if (this.coupenForm.get('img')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  image";
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
