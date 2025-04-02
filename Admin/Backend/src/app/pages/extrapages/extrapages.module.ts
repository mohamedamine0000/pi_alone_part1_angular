import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// calener
import { FullCalendarModule } from '@fullcalendar/angular';

// Countup
import { CountUpModule } from 'ngx-countup';

// dialog
import { DialogModule } from 'primeng/dialog';
// icon
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
// table
import { TableModule } from 'primeng/table';
import { CouponsComponent } from './coupons/coupons.component';
// sidebar
import { SidebarModule } from 'primeng/sidebar';
// paginator
import { PaginatorModule } from 'primeng/paginator';
// tabview
import { TabViewModule } from "primeng/tabview";
// scrollpanel
import { ScrollPanelModule } from 'primeng/scrollpanel';
// carrosel
import { GalleriaModule } from 'primeng/galleria';
// overlaypanel
import { OverlayPanelModule } from 'primeng/overlaypanel';

// dataview
import { DataViewModule } from 'primeng/dataview';

// calender picker
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';

// component
import { CalendarComponent } from './calendar/calendar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { BrandComponent } from './brand/brand.component';

// module
import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProfileComponent } from './profile/profile/profile.component';
import { SettingComponent } from './profile/setting/setting.component';
import { NgxMasonryModule } from 'ngx-masonry';
// SlickCarouselModule
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    CalendarComponent,
    UserlistComponent,
    CouponsComponent,
    ReviewRatingComponent,
    BrandComponent,
    StatisticsComponent,
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule,
    FullCalendarModule,
    DialogModule,
    CountUpModule,
    TableModule,
    SharedModule,
    SidebarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PaginatorModule,
    TabViewModule,
    NgApexchartsModule,
    ScrollPanelModule,
    GalleriaModule,
    CalendarModule,
    FileUploadModule,
    OverlayPanelModule,
    SlickCarouselModule,
    NgxMasonryModule,
    DataViewModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ExtrapagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
