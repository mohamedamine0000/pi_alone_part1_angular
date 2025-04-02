import { Component } from '@angular/core';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [MessageService]

})
export class AlertComponent {
  msgs1: Message[] = [];

  msgs2!: Message[];
  breadCrumbItems!: Array<{}>;
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.msgs1 = [
      { severity: 'success', summary: 'Success', detail: 'Hi! A simple Primary alert —check it out!' },
      { severity: 'info', summary: 'Info', detail: 'How are you! A simple secondary alert —check it out!' },
      { severity: 'warn', summary: 'Warning', detail: 'Yey! Everything worked! A simple success alert —check it out!' },
      { severity: 'error', summary: 'Error', detail: 'Something is very wrong! A simple danger alert —check it out!' }
    ];
    this.msgs2 = [
      { severity: 'success', summary: 'Success', detail: 'Hi! A simple Primary alert —check it out!' },
      { severity: 'info', summary: 'Info', detail: 'How are you! A simple secondary alert —check it out!' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' }
    ];
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Alerts', active: true }
    ];
  }

  showViaService() {
    this.messageService.add({severity:'success', detail:'Nice, you triggered this alert message!'});
  }
  
}