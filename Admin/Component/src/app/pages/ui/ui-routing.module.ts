import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { AccordionsComponent } from './accordions/accordions.component';
import { AlertComponent } from './alert/alert.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonComponent } from './button/button.component';
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
import { KnobComponent } from './knob/knob.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SplitterComponent } from './splitter/splitter.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

const routes: Routes = [
  {
    path: 'alerts',
    component: AlertComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'accordions',
    component: AccordionsComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent
  },
  {
    path: 'embed-video',
    component: EmbedVideoComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'modals',
    component: ModalsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'offcanvas',
    component: OffcanvasComponent
  },
  {
    path: 'placeholder',
    component: PlaceholderComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'knob',
    component: KnobComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'splitter',
    component: SplitterComponent
  },
  {
    path: 'speed-dial',
    component: SpeedDialComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
