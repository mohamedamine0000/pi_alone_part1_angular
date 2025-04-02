import { Component } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  breadCrumbItems!: Array<{}>;

  items!: Array<{}>;
  library: any;
  baseui: any;
  home: any;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'General', active: true }
    ];

    this.items = [
      { label: 'Home' },
    ];

    this.library = [
      { label: 'Home' },
      { label: 'Library' },
    ];

    this.baseui = [
      { label: 'Home' },
      { label: 'Base UI' },
      { label: 'General' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    });
  }

}
