import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListviewComponent } from './invoice-listview.component';

describe('InvoiceListviewComponent', () => {
  let component: InvoiceListviewComponent;
  let fixture: ComponentFixture<InvoiceListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
