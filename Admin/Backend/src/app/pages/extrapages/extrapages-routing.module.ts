import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// component
import { BrandComponent } from './brand/brand.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SettingComponent } from './profile/setting/setting.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path: 'calender',
    component: CalendarComponent
  },
  {
    path: 'userlist',
    component: UserlistComponent
  },
  {
    path: 'coupons',
    component: CouponsComponent
  },
  {
    path: 'review-rating',
    component: ReviewRatingComponent
  },
  {
    path: 'brand',
    component: BrandComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrapagesRoutingModule { }
