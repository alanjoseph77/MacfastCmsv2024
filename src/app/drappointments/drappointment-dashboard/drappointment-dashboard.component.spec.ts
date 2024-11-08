import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrappointmentDashboardComponent } from './drappointment-dashboard.component';

describe('DrappointmentDashboardComponent', () => {
  let component: DrappointmentDashboardComponent;
  let fixture: ComponentFixture<DrappointmentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrappointmentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrappointmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
