import { Component } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {
  breadCrumbItems!: Array<{}>;
  
  val!: number;
  maxval: number = 5;
  stepval!: number;
  basicval!: number;
  rangeValues: number[] = [20, 80];
  val4!: number;
  val2: number = 50;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Forms' },
       { label: 'Range Slider', active: true }
     ];
}
}
