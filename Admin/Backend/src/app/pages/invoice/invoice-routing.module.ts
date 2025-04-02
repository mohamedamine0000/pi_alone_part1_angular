import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceListviewComponent } from './invoice-listview/invoice-listview.component';
import { OverviewComponent } from './invoice-overview/invoice-overview.component';

// componment



const routes: Routes = [
  {
    path: 'listview',
    component: InvoiceListviewComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'create-invoice',
    component: CreateInvoiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
