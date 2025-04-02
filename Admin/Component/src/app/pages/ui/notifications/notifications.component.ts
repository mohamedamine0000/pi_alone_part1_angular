import { Component } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [MessageService]
})
export class NotificationsComponent {
  breadCrumbItems!: Array<{}>;
  position: any = 'tl';

  constructor(private messageService: MessageService) { }
  
  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Notifications', active: true }
    ];
    // this.addSingle()
  }

  toatPosition() {
    this.messageService.add({key: this.position, severity:'light', summary: 'Toner', detail: 'Hello, world! This is a toast message.'});
  }
  
  showToast(color:any,content:any) {
    this.messageService.add({severity:color, detail:content });
  }

  displayToast(position:any,color:any) {
    this.messageService.add({key: position, severity:color, detail: 'Welcome Back ! This is a Toast Notification'});
  }

  defaultToast(position:any,color:any) {
    this.messageService.add({key: position, severity:color, detail: 'Welcome Back ! This is a Toast Notification'});
  }

  duarationToast() {
    this.messageService.add({key: 'dt', severity:'success', detail: 'Toast Duration 5s',life:5000});
  }
}
