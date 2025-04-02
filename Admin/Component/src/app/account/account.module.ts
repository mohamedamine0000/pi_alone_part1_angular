import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Page404Component } from './auth/error/page404/page404.component';
import { Page500Component } from './auth/error/page500/page500.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PassChangeComponent } from './auth/pass-change/pass-change.component';
import { PassResetComponent } from './auth/pass-reset/pass-reset.component';
import { SuccessMsgComponent } from './auth/success-msg/success-msg.component';
import { TwoStepComponent } from './auth/two-step/two-step.component';



@NgModule({
  declarations: [

    Page404Component,
    Page500Component,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    PassChangeComponent,
    PassResetComponent,
    SuccessMsgComponent,
    TwoStepComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AccountModule { }
