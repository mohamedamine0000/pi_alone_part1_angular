import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomSelectComponent } from './tom-select.component';

describe('TomSelectComponent', () => {
  let component: TomSelectComponent;
  let fixture: ComponentFixture<TomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
