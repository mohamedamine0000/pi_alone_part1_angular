import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Load Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Primeng
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { PaginatorModule } from 'primeng/paginator';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';

// page Route
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';

// component
import { BasicComponent } from './basic/basic.component';
import { GridjsComponent } from './gridjs/gridjs.component';
import { ListjsComponent } from './listjs/listjs.component';
import { DatatablesComponent } from './datatables/datatables.component';

@NgModule({
  declarations: [
    BasicComponent,
    DatatablesComponent,
    GridjsComponent,
    ListjsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    TableModule,
    SharedModule,
    ProgressBarModule,
    PaginatorModule,
    OrderListModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollPanelModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TablesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
