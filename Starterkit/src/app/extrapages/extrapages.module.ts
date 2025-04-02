import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

// Module
import { ExtrapagesRoutingModule } from './extrapages-routing.module';



@NgModule({
  declarations: [
    ComingSoonComponent
  ],

  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
