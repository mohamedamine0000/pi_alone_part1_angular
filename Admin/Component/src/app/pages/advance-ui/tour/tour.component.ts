import { Component } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent {
  // bread crum items
  breadCrumbItems!: Array<{}>;
  
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'ScrollSpy', active: true }];
  }

}
