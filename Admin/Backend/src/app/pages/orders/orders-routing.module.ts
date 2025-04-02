import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { ListViewComponent } from './list-view/list-view.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'list-view',
    component: ListViewComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

