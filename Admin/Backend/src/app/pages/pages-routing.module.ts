import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './dashboards/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'extrapages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)
  },
  {
    path: 'sellers', loadChildren: () => import('./sellers/sellers.module').then(m => m.SellersModule)
  },
  {
    path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'shipping', loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule)
  },
  {
    path: 'localization', loadChildren: () => import('./localization/localization.module').then(m => m.LocalizationModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
