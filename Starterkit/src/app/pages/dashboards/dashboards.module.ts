import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';

// Countup
import { CountUpModule } from 'ngx-countup';


// map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Date Picker
import { CalendarModule } from 'primeng/calendar';

// Droup Down
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
// Datatable
import { TableModule } from 'primeng/table';

import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from "primeng/paginator";
import { ScrollPanelModule } from 'primeng/scrollpanel';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgApexchartsModule,
    CalendarModule,
    SplitButtonModule,
    DropdownModule,
    TableModule,
    DataViewModule,
    PaginatorModule,
    ScrollPanelModule,
    OverlayPanelModule,
    LeafletModule,
    ProgressBarModule,
    CountUpModule
  ],

})
export class DashboardsModule { }
