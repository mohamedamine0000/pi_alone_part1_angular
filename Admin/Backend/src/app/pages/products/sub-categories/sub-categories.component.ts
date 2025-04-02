import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Data Get
import { subcategorylist } from './data';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  subcategories: any;
  categoryForm!: UntypedFormGroup;
  submitted = false;
  econtent?: any;
  first: number = 1;
  endIndex: number = 10;
  removeIds: any;
  display!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Sub Categories', active: true }
    ];

    /**
     * Form Validation
     */
    this.categoryForm = this.formBuilder.group({
      _id: [''],
      subcategory: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

    this.subcategories = subcategorylist
  }
  /**
* Form data get
*/
  get form() {
    return this.categoryForm.controls;
  }

  // Edit Data
  editData(subcategorylist: any) {

    var modelTitle = document.getElementById('addCategoryLabel') as HTMLAreaElement;
    modelTitle.innerHTML = 'Edit Sub Categories';
    var updateBtn = document.getElementById('addNewCategory') as HTMLAreaElement;
    updateBtn.innerHTML = 'Save';

    var subcategorylist = this.subcategories[subcategorylist];
    this.categoryForm.controls['_id'].setValue(subcategorylist.id)
    this.categoryForm.controls['subcategory'].setValue(subcategorylist.subcategory);
    this.categoryForm.controls['category'].setValue(subcategorylist.category);
  }
  saveCategory() {
    if (this.categoryForm.valid) {
      if (this.categoryForm.get('_id')?.value) {
        this.subcategories = subcategorylist.map((subcategorylist: { id: any; }) => subcategorylist.id === this.categoryForm.get('_id')?.value ? { ...subcategorylist, ...this.categoryForm.value } : subcategorylist);
      } else {
        const subcategory = this.categoryForm.get('subcategory')?.value;
        const category = this.categoryForm.get('category')?.value;
        const id = this.subcategories.length + 1
        subcategorylist.push({
          id: 'TBSC' + id,
          subcategory,
          category,
          craetedby: 'Admin'
        })
      }
    } else {
      this.submitted = true
      document.getElementById('alert-error-msg')?.classList.remove('d-none')
    }
  }
  // Delete Record
  deleteRecord() {
    this.subcategories.splice(this.removeIds, 1)
    this.display = false;
  }

  // Pagination
  onPageChange(event: any) {
    this.first = event.first + 1;
    if (this.subcategories.length > 0) {
      var last = this.first + event.rows
      if (last <= this.subcategories.length) {
        this.endIndex = event.first + event.rows
      } else {
        this.endIndex = this.subcategories.length
      }
    }
  }
  // delete
  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }
}
