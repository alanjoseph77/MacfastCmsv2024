import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrappointmentEditComponent } from './drappointment-edit.component';

describe('DrappointmentEditComponent', () => {
  let component: DrappointmentEditComponent;
  let fixture: ComponentFixture<DrappointmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrappointmentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrappointmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
