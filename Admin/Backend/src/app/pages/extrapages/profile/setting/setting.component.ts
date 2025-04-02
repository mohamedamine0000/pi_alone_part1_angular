import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    // breadcrumb
    this.breadCrumbItems = [
      { label: 'Settings' },
      { label: 'My Account', active: true }
    ];
  }
} 