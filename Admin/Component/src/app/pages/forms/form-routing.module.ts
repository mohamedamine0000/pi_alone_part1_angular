import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceComponent } from './advance/advance.component';
import { CheckboxsRadiosComponent } from './checkboxs-radios/checkboxs-radios.component';
import { EditorsComponent } from './editors/editors.component';
import { ElementsComponent } from './elements/elements.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MasksComponent } from './masks/masks.component';
import { PickersComponent } from './pickers/pickers.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { SelectComponent } from './select/select.component';
import { TomSelectComponent } from './tom-select/tom-select.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardComponent } from './wizard/wizard.component';


const routes: Routes = [
  {
    path: "elements",
    component: ElementsComponent
  },
  {
    path: "select",
    component: SelectComponent
  },
  {
    path: "checkboxs-radios",
    component: CheckboxsRadiosComponent
  },
  {
    path: "pickers",
    component: PickersComponent
  },
  {
    path: "masks",
    component: MasksComponent
  },
  {
    path: "advance",
    component: AdvanceComponent
  },
  {
    path: "range-slider",
    component: RangeSliderComponent
  },
  {
    path: "validation",
    component: ValidationComponent
  },
  {
    path: "wizard",
    component: WizardComponent
  },
  {
    path: "editors",
    component: EditorsComponent
  },
  {
    path: "file-upload",
    component: FileUploadComponent
  },
  {
    path: "layouts",
    component: LayoutsComponent
  },
  {
    path: "tom-select",
    component: TomSelectComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
