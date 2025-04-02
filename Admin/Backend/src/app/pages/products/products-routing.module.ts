import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-grid',
    component: ProductGridComponent
  },
  {
    path: 'product-overview',
    component: ProductOverviewComponent
  },
  {
    path: 'product-create',
    component: ProductCreateComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sub-categories',
    component: SubCategoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
