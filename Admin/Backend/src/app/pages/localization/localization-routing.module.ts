import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrancyRatesComponent } from './currancy-rates/currancy-rates.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'currancy-rates',
    component: CurrancyRatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizationRoutingModule { }
