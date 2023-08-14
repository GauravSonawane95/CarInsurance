import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientselectComponent } from './varientselect.component';

describe('VarientselectComponent', () => {
  let component: VarientselectComponent;
  let fixture: ComponentFixture<VarientselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarientselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
