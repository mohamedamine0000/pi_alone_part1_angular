import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  providers: [MessageService]
})
export class AccordionsComponent {
  breadCrumbItems!: Array<{}>;

  activeState: boolean[] = [true, false, false];
  activeIndex!: number;
  collapsed = false

  constructor(private messageService: MessageService) { }

  onTabClose(event: { index: string; }) {
    this.messageService.add({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index })
  }

  onTabOpen(event: { index: string; }) {
    this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Accordions', active: true }
    ];
  }
}
