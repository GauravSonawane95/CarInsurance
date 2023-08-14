import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearmonthComponent } from './yearmonth.component';

describe('YearmonthComponent', () => {
  let component: YearmonthComponent;
  let fixture: ComponentFixture<YearmonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearmonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
