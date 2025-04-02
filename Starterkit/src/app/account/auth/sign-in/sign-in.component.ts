import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  // set the currenr year
  submitted = false;
  year: number = new Date().getFullYear();
  fieldTextType!: boolean;
  constructor() {
  }

  ngOnInit(): void {

  }
  /**
* Password Hide/Show
*/
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
