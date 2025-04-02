import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMasonryModule } from 'ngx-masonry';

import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

import { UiRoutingModule } from './ui-routing.module';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ColorsComponent } from './colors/colors.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { EmbedVideoComponent } from './embed-video/embed-video.component';
import { GeneralComponent } from './general/general.component';
import { GridComponent } from './grid/grid.component';
import { ImagesComponent } from './images/images.component';
import { ListsComponent } from './lists/lists.component';
import { MediaComponent } from './media/media.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SharedModule } from 'src/app/shared/shared.module';

// Lord Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// alert
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { KnobModule } from 'primeng/knob';
import { SplitterModule } from 'primeng/splitter';
import { TimelineModule } from 'primeng/timeline';
// dropdown
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from "primeng/tabview";
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { ProgressBarModule } from 'primeng/progressbar';

import { SpeedDialModule } from 'primeng/speeddial';
import { ConfirmationService } from 'primeng/api';
import { KnobComponent } from './knob/knob.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SplitterComponent } from './splitter/splitter.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    AccordionsComponent,
    BadgesComponent,
    CardsComponent,
    CarouselComponent,
    ColorsComponent,
    DropdownsComponent,
    EmbedVideoComponent,
    GeneralComponent,
    GridComponent,
    ImagesComponent,
    ListsComponent,
    MediaComponent,
    ModalsComponent,
    NotificationsComponent,
    OffcanvasComponent,
    PlaceholderComponent,
    ProgressComponent,
    TabsComponent,
    TypographyComponent,
    UtilitiesComponent,
    KnobComponent,
    TimelineComponent,
    SplitterComponent,
    SpeedDialComponent
  ],
  imports: [
    UiRoutingModule,
    CommonModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    SplitButtonModule,
    TabViewModule,
    TooltipModule,
    SharedModule,
    AccordionModule,
    SidebarModule,
    CarouselModule,
    FieldsetModule,
    DialogModule,
    ConfirmPopupModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    BreadcrumbModule,
    PaginatorModule,
    ToastModule,
    NgxMasonryModule,
    BadgeModule,
    ButtonModule,
    KnobModule,
    TimelineModule,
    SplitterModule,
    SpeedDialModule,
    ImageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConfirmationService]
})
export class UiModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}