import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { rating } from './data';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss']
})
export class ReviewRatingComponent {

  breadCrumbItems!: Array<{}>;
  Rating: any;

  public myOptions: NgxMasonryOptions = {
    horizontalOrder: true
  };

  ngOnInit(): void {
    // breadcrumb
    this.breadCrumbItems = [
      {
        label: 'Reviews & Ratings'
      },
      { label: 'Reviews & Ratings', active: true }
    ];
    this.Rating = rating
  }
}
