
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightComponent } from './highlight/highlight.component';
import { RatingComponent } from './rating/rating.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { SwipersComponent } from './swiper/swiper.component';
import { TourComponent } from './tour/tour.component';
import { AdvanceUiRoutingModule } from './advance-ui-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Lord Icon
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// rating
import { RatingModule } from 'primeng/rating';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollspyDirective } from 'src/app/scrollspy.directive';

// Galleria
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { DragDropModule } from 'primeng/dragdrop';
import { TabViewModule } from 'primeng/tabview';

import { ScrollPanelModule } from 'primeng/scrollpanel';

// SlickCarouselModule
import { SlickCarouselModule } from 'ngx-slick-carousel';
// tree
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    HighlightComponent,
    RatingComponent,
    ScrollbarComponent,
    ScrollspyComponent,
    SweetalertComponent,
    SwipersComponent,
    TourComponent,
    ScrollspyDirective
  ],
  imports: [
    CommonModule,
    RatingModule,
    AdvanceUiRoutingModule,
    FormsModule,
    GalleriaModule,
    CarouselModule,
    ScrollPanelModule,
    TreeModule,
    SharedModule,
    DragDropModule,
    TabViewModule,
    SlickCarouselModule,
    ScrollToModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvanceUiModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
