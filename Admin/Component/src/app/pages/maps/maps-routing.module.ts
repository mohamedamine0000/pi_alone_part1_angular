import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { GoogleComponent } from "./google/google.component";
import { LeafletComponent } from "./leaflet/leaflet.component";
import { AmChartsComponent } from './am-charts/am-charts.component';

const routes: Routes = [
  {
    path: 'google',
    component: GoogleComponent
  },
  {
    path: 'amCharts',
    component: AmChartsComponent
  },
  {
    path: 'leaflet',
    component: LeafletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule {

}
