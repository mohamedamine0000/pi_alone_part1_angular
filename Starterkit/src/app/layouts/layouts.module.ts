import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SimplebarAngularModule } from 'simplebar-angular';

// overlaypanel
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
// sidebar
import { SidebarModule } from 'primeng/sidebar';

// dialog
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';


// Component pages
import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { TopTagbarComponent } from './top-tagbar/top-tagbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontalTopbarComponent } from './horizontal-topbar/horizontal-topbar.component';
import { TwoColumnComponent } from './two-column/two-column.component';
import { TwoColumnSidebarComponent } from './two-column-sidebar/two-column-sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    TopTagbarComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    RightsidebarComponent,
    HorizontalComponent,
    HorizontalTopbarComponent,
    TwoColumnComponent,
    TwoColumnSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SimplebarAngularModule,
    TranslateModule.forRoot(),
    OverlayPanelModule,
    SidebarModule,
    DialogModule,
    FormsModule,
    DropdownModule, ScrollPanelModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LanguageService]
})
export class LayoutsModule { }
