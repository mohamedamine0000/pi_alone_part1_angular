import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

// Data Get
import { listdata, paginationlist, dataattribute, existingList, FuzzyList } from './data';

@Component({
  selector: 'app-listjs',
  templateUrl: './listjs.component.html',
  styleUrls: ['./listjs.component.scss']
})
export class ListjsComponent {
  breadCrumbItems!: Array<{}>;
  paginationDatas: any;
  attributedata: any;
  existingData: any;
  fuzzyData: any;
  first: any = 0;
  endIndex: any = 3;

  listJsForm!: UntypedFormGroup;
  ListJsDatas!: any;
  addmodal: any;
  submitted = false;
  removemodal: any;
  removeids: any;
  selectedProducts: any;

  constructor(private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'Listjs', active: true }
    ];

    /**
 * Form Validation
 */
    this.listJsForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });



    /**
     * fetches data
     */
    this.ListJsDatas = listdata;
    this.attributedata = dataattribute
    this.existingData = existingList
    this.fuzzyData = FuzzyList

    this.paginationDatas = paginationlist

    this.paginationDatas = paginationlist.slice(this.first, this.endIndex);
  }

  // Pagination
  onPageChange(event: any) {
    this.first = event.first + 1;
    if (this.paginationDatas.length > 0) {
      var last = this.first + event.rows
      if (last <= this.paginationDatas.length) {
        this.endIndex = event.first + event.rows
      } else {
        this.endIndex = this.paginationDatas.length
      }
    }
    this.paginationDatas = paginationlist.slice(event.first, last - 1);
  }

  addcustomer() {
    this.addmodal = true
  }

  removecutomer(id: any) {
    this.removeids = id
    this.removemodal = true
  }


  editcustomer(i: any) {
    this.submitted = false;
    this.addmodal = true
    setTimeout(() => {
      var updateBtn = document.querySelector('.modal-title') as HTMLAreaElement;
      updateBtn.innerHTML = "Edit Customer";
      var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = "Update";
    }, 0);
    var econtent = this.ListJsDatas[i]
    this.listJsForm.controls['id'].setValue(econtent.id);
    this.listJsForm.controls['name'].setValue(econtent.name);
    this.listJsForm.controls['email'].setValue(econtent.email);
    this.listJsForm.controls['phone'].setValue(econtent.phone);
    this.listJsForm.controls['date'].setValue(econtent.date);
    this.listJsForm.controls['status'].setValue(econtent.status);
  }

  /**
  * Save saveListJs
  */
  saveListJs() {
    if (this.listJsForm.valid) {
      if (this.listJsForm.get('id')?.value) {
        this.ListJsDatas = this.ListJsDatas.map((data: { id: any; }) => data.id === this.listJsForm.get('id')?.value ? { ...data, ...this.listJsForm.value } : data)
      } else {
        const name = this.listJsForm.get('name')?.value;
        const email = this.listJsForm.get('email')?.value;
        const phone = this.listJsForm.get('phone')?.value;
        const date = '14 Apr, 2021';
        const status = this.listJsForm.get('status')?.value;
        this.ListJsDatas.push({
          id: this.ListJsDatas.length + 1,
          name,
          email,
          phone,
          date,
          status
        });
        this.addmodal = false
      }
    }
    this.addmodal = false
    setTimeout(() => {
      this.listJsForm.reset();
    }, 2000);
    this.submitted = true
    this.listJsForm = this.formBuilder.group({
      id: '',
      name: '',
      email: '',
      phone: '',
      date: '',
      status: '',
    });
  }

  deleteRecord() {
    this.removemodal = false
    this.ListJsDatas.splice(this.removeids, '1')
  }

  onRowSelect(event: any) {
    this.selectedProducts = [event.data];
  }
  deleteSelected() {
    this.selectedProducts.forEach(function (item: any) {
      const index = listdata.indexOf(item);
      listdata.splice(index, 1);
    });
  }
}
