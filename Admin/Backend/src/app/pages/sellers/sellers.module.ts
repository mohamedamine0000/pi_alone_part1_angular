import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//page Routing
import { SellersRoutingModule } from './sellers-routing.module';
// component
import { ListViewComponent } from './list-view/list-view.component';
// table
import { TableModule } from 'primeng/table';
// checkbox
import { CheckboxModule } from 'primeng/checkbox';
// modal
import { DialogModule } from 'primeng/dialog';
// dropdown
import { DropdownModule } from 'primeng/dropdown';

// Countup
import { CountUpModule } from 'ngx-countup';

// dataview
import { DataViewModule } from 'primeng/dataview';
// split button
import { SplitButtonModule } from 'primeng/splitbutton';
// overlaypanel
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
// Module
import { SharedModule } from 'src/app/shared/shared.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    ListViewComponent,
    GridViewComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    SellersRoutingModule,
    SharedModule,
    TableModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    CountUpModule,
    ReactiveFormsModule,
    DataViewModule,
    HttpClientModule,
    FormsModule,
    SplitButtonModule,
    OverlayPanelModule,
    CalendarModule
  ]
})
export class SellersModule {

}
