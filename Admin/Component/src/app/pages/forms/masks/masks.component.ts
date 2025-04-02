import { Component } from '@angular/core';

@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})
export class MasksComponent {


  val4: string | undefined;
  val3: string | undefined;
  val2: string | undefined;
  val1: string | undefined;

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
       { label: 'Forms' },
       { label: 'Input Masks', active: true }
     ];
}
}
