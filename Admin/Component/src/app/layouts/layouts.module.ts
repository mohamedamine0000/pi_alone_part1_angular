import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Language
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
// Component
import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TopTagbarComponent } from './top-tagbar/top-tagbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontalTopbarComponent } from './horizontal-topbar/horizontal-topbar.component';
import { TwoColumnSidebarComponent } from './two-column-sidebar/two-column-sidebar.component';
import { TwoColumnComponent } from './two-column/two-column.component';

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    TopbarComponent,
    TopTagbarComponent,
    SidebarComponent,
    FooterComponent,
    RightsidebarComponent,
    HorizontalComponent,
    HorizontalTopbarComponent,
    TwoColumnSidebarComponent,
    TwoColumnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ScrollPanelModule,
    SidebarModule,
    DropdownModule,
    OverlayPanelModule,
    DialogModule,
    SimplebarAngularModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LanguageService],
})
export class LayoutsModule { }
