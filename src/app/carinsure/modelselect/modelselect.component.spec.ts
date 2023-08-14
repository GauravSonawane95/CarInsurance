import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelselectComponent } from './modelselect.component';

describe('ModelselectComponent', () => {
  let component: ModelselectComponent;
  let fixture: ComponentFixture<ModelselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
