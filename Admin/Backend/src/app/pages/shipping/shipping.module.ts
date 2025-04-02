import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// scrollpanel
import { ScrollPanelModule } from 'primeng/scrollpanel';
// table
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
// map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// Component
import { ListComponent } from './list/list.component';
// Module
import { ShippingRoutingModule } from './shipping-routing.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    ShipmentComponent
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    ScrollPanelModule,
    SharedModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    LeafletModule
  ]
})
export class ShippingModule { }
