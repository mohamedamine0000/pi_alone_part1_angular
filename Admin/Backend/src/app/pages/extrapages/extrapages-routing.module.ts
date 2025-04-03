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

import { AddGymComponent } from "./add-gym/add-gym.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GymComponent } from "./gym/gym.component";
import { UpdateGymComponent } from './update-gym/update-gym.component';


const routes: Routes = [
  { path: 'update-gym/:id', 
    component: UpdateGymComponent },
  {
    path : "add-gym",
    component : AddGymComponent,
},
{
    path: "gym",
    component: GymComponent, 
},
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
