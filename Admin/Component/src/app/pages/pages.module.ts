import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lord Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from "../shared/shared.module";

// counter
import { CountUpModule } from "ngx-countup";

// component
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    OverviewComponent,
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CountUpModule
  ],
})

export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
