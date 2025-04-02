import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  visibleSidebar1: any;
  visibleSidebar2: any;
  visibleSidebar3: any;
  visibleSidebar4: any;
  visibleSidebar5: any;
  visibleSidebar6: any;
  visibleSidebar7: any;
  visibleSidebar8: any;
    
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Offcanvas', active: true }
    ];
  }
}
