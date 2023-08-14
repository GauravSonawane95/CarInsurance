import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinsureComponent } from './carinsure.component';

describe('CarinsureComponent', () => {
  let component: CarinsureComponent;
  let fixture: ComponentFixture<CarinsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarinsureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarinsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
