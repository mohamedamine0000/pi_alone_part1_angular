import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// Data Get
import { brand } from './data';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  brands: any;
  displayPosition!: boolean;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  categoriesForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // FetchData
    this.brands = brand

    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Toner' },
      { label: 'Brands', active: true }
    ];
    /**
     * Form Validation
     */
    this.categoriesForm = this.formBuilder.group({
      _id: [''],
      companyLogo: [''],
      brandName: ['', [Validators.required]],
    });

  }
  // modal open
  showBasicDialog() {
    this.displayPosition = true;
  }


  saveCategory() {

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
      (document.getElementById('brandLogo-img') as HTMLImageElement).src = this.imageURL;
    }
    reader.readAsDataURL(file)
  }

}
