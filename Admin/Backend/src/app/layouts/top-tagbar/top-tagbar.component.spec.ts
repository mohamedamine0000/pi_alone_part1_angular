import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTagbarComponent } from './top-tagbar.component';

describe('TopTagbarComponent', () => {
  let component: TopTagbarComponent;
  let fixture: ComponentFixture<TopTagbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTagbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTagbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
