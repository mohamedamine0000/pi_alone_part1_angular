import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Cards', active: true }
    ];
  }

   /***
   * Masonry Option Function
   */
   public myOptions: NgxMasonryOptions = {
    horizontalOrder: true
  };
}
