import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Page Route
import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Lord Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

//Wizard
// import { ArchwizardModule } from 'angular-archwizard';

// Primeng
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { TabViewModule } from "primeng/tabview";
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';
import { StepsModule } from 'primeng/steps';
import { EditorModule } from 'primeng/editor';

// component
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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PickListModule } from 'primeng/picklist';
import { CardModule } from 'primeng/card';
//Wizard
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';

@NgModule({
  declarations: [
    AdvanceComponent,
    CheckboxsRadiosComponent,
    EditorsComponent,
    ElementsComponent,
    FileUploadComponent,
    LayoutsComponent,
    MasksComponent,
    PickersComponent,
    RangeSliderComponent,
    SelectComponent,
    TomSelectComponent,
    ValidationComponent,
    WizardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormRoutingModule,
    CalendarModule,
    ColorPickerModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    SplitButtonModule,
    TreeSelectModule,
    TabViewModule,
    InputMaskModule,
    SharedModule,
    SliderModule,
    MultiSelectModule,
    ChipsModule,
    InputSwitchModule,
    AutoCompleteModule,
    PickListModule,
    StepsModule,
    CardModule,
    EditorModule,
    CdkStepperModule,
    NgStepperModule,
    FileUploadModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
