import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from 'src/app/shared/shared.module';


// component
import { TransactionComponent } from './transaction/transaction.component';

// module
import { LocalizationRoutingModule } from './localization-routing.module';
import { CurrancyRatesComponent } from './currancy-rates/currancy-rates.component';



@NgModule({
  declarations: [
    TransactionComponent,
    CurrancyRatesComponent
  ],
  imports: [
    CommonModule,
    LocalizationRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    DialogModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class LocalizationModule { }
