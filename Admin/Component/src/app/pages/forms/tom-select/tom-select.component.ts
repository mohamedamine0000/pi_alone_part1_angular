import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tom-select',
  templateUrl: './tom-select.component.html',
  styleUrls: ['./tom-select.component.scss'],

})



export class TomSelectComponent {
  nodes: any = [];
  selected: any;
  selected1: any;
  nodes1: any[] = [];

  //  Validation form
  validationform!: UntypedFormGroup;

  myform: any;

  submitted: boolean = false;
  flaglist: { label: string, imgsrc: string }[] = [];

  breadCrumbItems!: Array<{}>;
  browserlist: any;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Tom Select', active: true }
    ];

    /**
       * Bootstrap validation form data
       */
    this.validationform = this.formBuilder.group({
      selected: ['', [Validators.required]],
    });

    this.nodes = [
      {
        "label": "Google",
        "url": "https://google.org"
      },
      {
        "label": "Yahoo",
        "url": "https://yahoo.org"
      },
      {
        "label": "DIY",
        "url": "https://diy.org"
      }
    ];
    this.nodes1 = [
      {
        "label": "Brian Reavis",
      },
      {
        "label": "Nikola Tesia",
      },
      {
        "label": "someone@gmail.com",
      },
      {
        "label": "example@gmail.com",
      }
    ];

    this.flaglist = [
      { "label": "Ascension Island", "imgsrc": 'assets/images/flags/ac.svg' },
      { "label": " Andorra ", "imgsrc": 'assets/images/flags/ad.svg' },
      { "label": "United Arab Emirates", "imgsrc": 'assets/images/flags/ae.svg' },
      { "label": "Afghanistan", "imgsrc": 'assets/images/flags/af.svg' },
      { "label": "Antigua and Barbuda", "imgsrc": 'assets/images/flags/ag.svg' },
      { "label": "Anguilla", "imgsrc": 'assets/images/flags/ai.svg' },
      { "label": "Armania", "imgsrc": 'assets/images/flags/am.svg' },
      { "label": "Angola", "imgsrc": 'assets/images/flags/ao.svg' },
      { "label": "Antarctica", "imgsrc": 'assets/images/flags/aq.svg' },
      { "label": "Argentina", "imgsrc": 'assets/images/flags/ar.svg' },
      { "label": "American Samoa", "imgsrc": 'assets/images/flags/as.svg' },
      { "label": "Austria", "imgsrc": 'assets/images/flags/at.svg' },
      { "label": "Australli", "imgsrc": 'assets/images/flags/au.svg' }
    ];

    this.browserlist = [
      {
        label: "Google Chrome",
        url:"https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-32.png"
      },
      {
        label: "Mozilla Firefox",
        url:"https://cdn0.iconfinder.com/data/icons/flat-round-system/512/firefox-32.png"
      },
      {
        label: "Internet Explorer",
        url:"https://cdn0.iconfinder.com/data/icons/flat-round-system/512/internet_explorer-32.png"
      },
    ]
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }


  onSubmit() {

    this.submitted = true;
  }

}


