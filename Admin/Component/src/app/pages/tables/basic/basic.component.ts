import { Component } from '@angular/core';

// data get
import { tablelist, product, caption, darktablelist,greentablelist, hovertable, bordertable, headtable, tablefooter,tablenesting,varianttable, responsivetable} from './data';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  defaulttable: any;
  product: any;
  caption: any;
  darktable: any;
  colortable: any;
  hovertable: any;
  borderdtable: any;
  headtable: any;
  footertable: any;
  nestingtable: any;
  tablevariant: any;
  responsive: any;

  constructor() {

  }

  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'Basic Tables', active: true }
    ];

    // Fetch Data
    this.defaulttable = tablelist
    this.product = product
    this.caption = caption
    this.darktable = darktablelist
    this.colortable = greentablelist
    this.hovertable = hovertable
    this.borderdtable = bordertable
    this.headtable = headtable
    this.footertable = tablefooter
    this.nestingtable = tablenesting
    this.tablevariant = varianttable
    this.responsive = responsivetable
  }

}
