import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { gridview } from './data';


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})


export class GridViewComponent {
  displayPosition!: boolean;
  products: any;
  endIndex!: number;
  first: any;
  sortOptions: any;
  sortOrder: any;
  sortField: any;
  row: any;
  data: any;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  display!: boolean;
  coupenForm!: UntypedFormGroup;
  submitted!: boolean;
  removeIds: any
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // Fetch Data
    this.products = gridview;
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Sellers' },
      { label: 'Grid View', active: true }
    ];

    /**
 * Form Validation
 */
    this.coupenForm = this.formBuilder.group({
      _id: [''],
      logo: [''],
      stock: ['', [Validators.required]],
      revenue: ['', [Validators.required]],
      service: ['', [Validators.required]],
      link: ['', [Validators.required]],
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

  // sort
  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  // form data get
  get form() {
    return this.coupenForm.controls;
  }

  // File Upload
  imageURL: string = '';
  fileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
        const companyLogoImg = document.getElementById('companyLogo-img') as HTMLImageElement;
        if (companyLogoImg) {
          companyLogoImg.src = this.imageURL;
        }
      };
      reader.readAsDataURL(file);
    }
  }


  //Edit 
  editProduct(gridview: any) {
    this.displayPosition = true;
    setTimeout(() => {
      var modelTitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modelTitle.innerHTML = 'Edit seller details';
      var updateBtn = document.querySelector('.add-btn') as HTMLAreaElement;
      updateBtn.innerHTML = 'Save';
    }, 0);
    var gridview = this.products[gridview]
    this.coupenForm.controls['_id'].setValue(gridview.id);
    this.coupenForm.controls['service'].setValue(gridview.service);
    this.coupenForm.controls['link'].setValue(gridview.link);
    this.coupenForm.controls['stock'].setValue(gridview.stock);
    this.coupenForm.controls['revenue'].setValue(gridview.revenue);
    // Set the image source (assuming gridview.logo is a URL)
    this.imageURL = gridview.logo; // Set the image URL for editing
    console.log(this.imageURL)
  }

  // Add Edit Coupen
  saveCoupen() {
    if (this.coupenForm.valid) {
      if (this.coupenForm.get('_id')?.value) {
        this.products = gridview.map((gridview: { id: any; }) => gridview.id === this.coupenForm.get('_id')?.value ? { ...gridview, ...this.coupenForm.value } : gridview);
        this.products = gridview.map((gridview: { id: any; }) => gridview.id === this.coupenForm.get('_id')?.value ? { ...gridview, ...this.coupenForm.value } : gridview);
        this.displayPosition = false;
      } else {
        const stock = this.coupenForm.get('stock')?.value
        const link = this.coupenForm.get('link')?.value
        const service = this.coupenForm.get('service')?.value
        const revenue = this.coupenForm.get('revenue')?.value
        gridview.push({
          id: this.products.length + 1,
          logo: this.imageURL,
          stock,
          link,
          service,
          revenue
        })
        this.displayPosition = false;
        // Clear the form and hide the modal
        this.coupenForm.reset();
        this.displayPosition = false;
        this.imageURL = ''; // Clear the image URL
      }
    } else {
      this.submitted = true
      document.getElementById('alert-error-msg')?.classList.remove('d-none')
      this.formvalidation()
    }
  }

  formvalidation() {
    if (this.coupenForm.get('img')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a logo img";
      return false;
    }
    if (this.coupenForm.get('service')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a seller name";
      return false;
    }
    if (this.coupenForm.get('link')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a web url";
      return false;
    }
    if (this.coupenForm.get('stock')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  number of stocks";
      return false;
    }
    if (this.coupenForm.get('revenue')!.value == "") {
      var errorMsg = document.getElementById("alert-error-msg") as HTMLAreaElement
      errorMsg.innerHTML = "Please enter a  revenue";
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