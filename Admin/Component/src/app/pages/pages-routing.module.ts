import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
  },
  {
     path:'ui',loadChildren:() => import('./ui/ui.module').then(m => m.UiModule)
  },
  {
    path: 'advance-ui', loadChildren: () => import('./advance-ui/advance-ui.module').then(m => m.AdvanceUiModule)
  },
  {
    path: 'custom-ui', loadChildren: () => import('./custom-ui/custom-ui.module').then(m => m.CustomUiModule)
  },
  {
    path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule)
  },
  {
    path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
