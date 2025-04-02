import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent {
  breadCrumbItems!: Array<{}>;
  value!: number;
  value1: number = 10;
  value2: number = 20;
  value3: number = 60;
  value4: number = 40;
  value5: number = 50;
  value6: number = 50;
  // reactive forms
  formGroup!: FormGroup;


  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Images', active: true }
    ];
    this.formGroup = new FormGroup({
      value: new FormControl(32)
    });
  }
}
