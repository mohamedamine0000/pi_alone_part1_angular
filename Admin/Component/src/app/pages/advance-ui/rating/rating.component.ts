import { Component } from '@angular/core';




@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;
  rateValue1: number = 3;
  rateValue2: number = 1.2;
  rateValue3: number = 0;
  rateValue4: number = 4;
  rateValue5: number = 1;
  rateValue6: number = 2;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Ratings', active: true }];
  }



}
