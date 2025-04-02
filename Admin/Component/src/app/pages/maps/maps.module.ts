import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Prime ng
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

// map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// Google Map
import { GoogleMapsModule } from '@angular/google-maps';

// Page Route
import { MapsRoutingModule } from './maps-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// component
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { AmChartsComponent } from './am-charts/am-charts.component';


@NgModule({
  declarations: [
    GoogleComponent,
    LeafletComponent,
    AmChartsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientModule,
    MapsRoutingModule,
    FormsModule,
    ButtonModule,
    LeafletModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService]
})
export class MapsModule { }
