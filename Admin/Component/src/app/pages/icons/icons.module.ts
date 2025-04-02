import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Rouet
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsRoutingModule } from './icons-routing.module';

// component
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BoxiconComponent } from './boxicon/boxicon.component';
import { MaterialdesignComponent } from './materialdesign/materialdesign.component';
import { PhosphorComponent } from './phosphor/phosphor.component';
import { RemixComponent } from './remix/remix.component';

@NgModule({
  declarations: [
    BootstrapComponent,
    BoxiconComponent,
    MaterialdesignComponent,
    PhosphorComponent,
    RemixComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
