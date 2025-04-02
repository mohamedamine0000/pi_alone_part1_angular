import { Component } from '@angular/core';

@Component({
  selector: 'app-pickers',
  templateUrl: './pickers.component.html',
  styleUrls: ['./pickers.component.scss']
})
export class PickersComponent {

  date1!: Date;
  date2!: Date;
  date3!: Date;
  date4!: Date;
  date5!: Date;
  date6!: Date;
  date7!: Date;
  date8!: Date;
  date9!: Date;
  date10!: Date;
  myDate = new Date();
  pretime: any;

  rangeDates: Date[] = [];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  
  color1!: string;


  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Forms' },
       { label: 'Pickers', active: true }
     ];
    
     this.pretime = '16:45'
}
   
}
