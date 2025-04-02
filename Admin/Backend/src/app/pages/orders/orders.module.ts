import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// checkbox
import { CheckboxModule } from 'primeng/checkbox';
// calender
import { CalendarModule } from 'primeng/calendar';
// table
import { TableModule } from 'primeng/table';
// dropdown
import { DropdownModule } from 'primeng/dropdown';
// modal
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
// overlaypanel
import { OverlayPanelModule } from 'primeng/overlaypanel';

// Countup
import { CountUpModule } from 'ngx-countup';

// component
import { ListViewComponent } from './list-view/list-view.component';
import { OverviewComponent } from './overview/overview.component';

// Module
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListViewComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    SharedModule,
    HttpClientModule,
    OverlayPanelModule,
    CountUpModule,
    ReactiveFormsModule,
    TimelineModule
  ]
})
export class OrdersModule { }
