import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent {

  breadCrumbItems!: Array<{}>;
  modalForm!: UntypedFormGroup;
  displayBasic: any;
  displayCenter: any;
  displayGrid: any;
  displayBackdrop: any;
  displayFirst: any;
  displaySecond: any;
  displayTooltip: any;
  displayScroll: any;
  displayMary: any;
  modalname: any;
  displayFull: any;
  displayPosition: any;
  position: any;
  displaySuccess: any;
  displayLogin: any;
  displaysubscribe: any;
  displaysignup: any;

  constructor(private confirmationService: ConfirmationService,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Modals', active: true }
    ];

    this.modalForm = this.formBuilder.group({
      name: ['mary']
    })
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showCenterDialog() {
    this.displayCenter = true;
  }

  showGridDialog() {
    this.displayGrid = true;
  }

  showBackdropDialog() {
    this.displayBackdrop = true;
  }

  showFirstDialog() {
    this.displaySecond = false;
    this.displayFirst = true;
  }

  showSecondDialog() {
    this.displayFirst = false;
    this.displaySecond = true;
  }

  showTooltipDialog() {
    this.displayTooltip = true;
  }

  showScrolldialogue() {
    this.displayScroll = true;
  }

  ShowMaryDialog(name: any) {
    this.modalForm.controls['name'].setValue(name);
    this.modalname = name
    this.displayMary = true;
  }

  ShowFullModal() {
    this.displayFull = true
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  successDialog() {
    this.displaySuccess = true
  }

  showLoginDialog() {
    this.displayLogin = true
  }

  subscribeModal() {
    this.displaysubscribe = true
  }

  signupModal() {
    this.displaysignup = true
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      // target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle"
    });
  }
}
