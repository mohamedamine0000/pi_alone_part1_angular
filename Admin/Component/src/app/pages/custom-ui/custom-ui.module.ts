import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { CustomUiRoutingModule } from './custom-ui-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// counter
import { CountUpModule } from "ngx-countup";

import { OverlayPanelModule } from 'primeng/overlaypanel';

// component
import { RibbonsComponent } from './ribbons/ribbons.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    RibbonsComponent,
    ProfileComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    CustomUiRoutingModule,
    SharedModule,
    CountUpModule,
    OverlayPanelModule
  ]
})
export class CustomUiModule { }
