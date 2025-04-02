import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ProfileComponent } from './profile/profile.component';

// component
import { RibbonsComponent } from './ribbons/ribbons.component';

const routes: Routes = [
  {
    path: 'ribbons',
    component:RibbonsComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'counter',
    component:CounterComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomUiRoutingModule { }
