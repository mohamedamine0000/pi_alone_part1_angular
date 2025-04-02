import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BoxiconComponent } from './boxicon/boxicon.component';
import { MaterialdesignComponent } from './materialdesign/materialdesign.component';
import { PhosphorComponent } from './phosphor/phosphor.component';
import { RemixComponent } from './remix/remix.component';

const routes: Routes = [
  {
    path: 'remix',
    component: RemixComponent
  },
  {
    path: 'boxicons',
    component: BoxiconComponent
  },
  {
    path: 'materialdesign',
    component: MaterialdesignComponent
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'phosphor',
    component: PhosphorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
