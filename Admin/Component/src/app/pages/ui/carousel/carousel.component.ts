import { Component } from '@angular/core';

// Data Get
import { slider1, slider2, slider3, slider4, slider5, slider6 } from './data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  breadCrumbItems!: Array<{}>;
  slide1: any;
  slide2: any;
  slide3: any;
  slide4: any;
  slide5: any;
  slide6: any;
  isRTL = true; // Set this to true for RTL, false for LTR

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Carousel', active: true }
    ];


    // Fetch Data
    this.slide1 = slider1;
    this.slide2 = slider2;
    this.slide3 = slider3;
    this.slide4 = slider4;
    this.slide5 = slider5;
    this.slide6 = slider6;
  }
}