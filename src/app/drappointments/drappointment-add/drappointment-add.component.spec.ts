import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrappointmentAddComponent } from './drappointment-add.component';

describe('DrappointmentAddComponent', () => {
  let component: DrappointmentAddComponent;
  let fixture: ComponentFixture<DrappointmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrappointmentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrappointmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
