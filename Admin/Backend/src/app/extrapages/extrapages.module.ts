import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

// Module
import { ExtrapagesRoutingModule } from './extrapages-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComingSoonComponent
   
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
