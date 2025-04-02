import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
  providers: [MessageService]
})
export class SpeedDialComponent {
  breadCrumbItems!: Array<{}>;
  items!: MenuItem[];
  tooltipItems!: MenuItem[];
  leftTooltipItems!: MenuItem[];
  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Speed-Dial', active: true }
    ];

    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }
}
