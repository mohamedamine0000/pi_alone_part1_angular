import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  breadCrumbItems!: Array<{}>;
  dropdownList: any;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Custom UI' },
      { label: 'Profile', active: true }
    ];

    this.dropdownList = [
      {name:'Action'},
      {name:'Another action'},
      {name:'Something else here'},
    ]
  }
}
