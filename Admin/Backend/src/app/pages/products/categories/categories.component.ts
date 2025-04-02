import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Data Get
import { categorylist } from './data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  categories: any;
  removeIds: any;
  categoriesForm!: UntypedFormGroup;
  submitted!: boolean;
  econtent?: any;
  display!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Categories', active: true }
    ];

    /**
     * Form Validation
     */
    this.categoriesForm = this.formBuilder.group({
      _id: [''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

    // Data Get
    this.categories = categorylist
  }
  // show dialog
  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }

  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    let fileList: any = (event.target as HTMLInputElement);
    let file: File = fileList.files[0];
    document.getElementById('')
    this.categoriesForm.patchValue({
      // image_src: file.name
      image_src: 'brands/dribbble.png'
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      (document.getElementById('category-img') as HTMLImageElement).src = this.imageURL;
    }
    reader.readAsDataURL(file)
  }

  /**
* Form data get
*/
  get form() {
    return this.categoriesForm.controls;
  }

  // Edit Data
  editData(categorylist: any) {
    this.submitted = false;
    var categorylist = this.categories[categorylist];
    this.categoriesForm.controls['_id'].setValue(categorylist.id)
    this.categoriesForm.controls['title'].setValue(categorylist.title);
    this.categoriesForm.controls['description'].setValue(categorylist.description);
    (document.getElementById('category-img') as HTMLImageElement).src = categorylist.icon;
  }

  saveCategory() {
    if (this.categoriesForm.valid) {
      if (this.categoriesForm.get('_id')?.value) {
        this.categories = categorylist.map((categorylist: { id: any; }) => categorylist.id === this.categoriesForm.get('_id')?.value ? { ...categorylist, ...this.categoriesForm.value } : categorylist);
       } else {
        const title = this.categoriesForm.get('title')?.value
        const description = this.categoriesForm.get('description')?.value
        categorylist.push({
          id: this.categories.length + 1,
          title,
          icon:'',
          subcategory:[''],
          description
        })
      }
    }
    else {
      this.submitted = true
      document.getElementById('alert-error-msg')?.classList.remove('d-none')
    }
  }
  first: number = 0;
  rows: number = 10;
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  // Delete Record
  deleteRecord() {
    this.categories.splice(this.removeIds, 1)
    this.display = false;
  }
}
