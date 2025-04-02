import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// icon
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
// Counter
// Countup
import { CountUpModule } from 'ngx-countup';

// calendar
import { CalendarModule } from 'primeng/calendar';
// table
import { TableModule } from 'primeng/table';
// checkbox
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
// overlaypanel
import { OverlayPanelModule } from 'primeng/overlaypanel';
// component
import { InvoiceListviewComponent } from './invoice-listview/invoice-listview.component';
import { OverviewComponent } from './invoice-overview/invoice-overview.component';
// Routing
import { InvoiceRoutingModule } from './invoice-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';




@NgModule({
  declarations: [
    InvoiceListviewComponent,
    OverviewComponent,
    CreateInvoiceComponent
  ],


  imports: [
    CommonModule,
    InvoiceRoutingModule,
    CountUpModule,
    CalendarModule,
    TableModule,
    CheckboxModule,
    SharedModule,
    InputNumberModule,
    OverlayPanelModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvoiceModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
