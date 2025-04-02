import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrancyRatesComponent } from './currancy-rates.component';

describe('CurrancyRatesComponent', () => {
  let component: CurrancyRatesComponent;
  let fixture: ComponentFixture<CurrancyRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrancyRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrancyRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
