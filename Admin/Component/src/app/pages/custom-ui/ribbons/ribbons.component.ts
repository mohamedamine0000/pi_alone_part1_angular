import { Component } from '@angular/core';

@Component({
  selector: 'app-ribbons',
  templateUrl: './ribbons.component.html',
  styleUrls: ['./ribbons.component.scss']
})
export class RibbonsComponent {
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Custom UI' },
      { label: 'Ribbons', active: true }
    ];
  }
}
