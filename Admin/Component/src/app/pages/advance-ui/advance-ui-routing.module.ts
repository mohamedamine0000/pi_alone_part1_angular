import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightComponent } from './highlight/highlight.component';
import { RatingComponent } from './rating/rating.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { SwipersComponent } from './swiper/swiper.component';

const routes: Routes = [

  {
    path: 'sweetalert',
    component: SweetalertComponent
  },

  {
    path: 'scrollbar',
    component: ScrollbarComponent
  },
  {
    path: 'swiper',
    component: SwipersComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'highlight',
    component: HighlightComponent
  },
  {
    path: 'scrollspy',
    component: ScrollspyComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceUiRoutingModule { }
