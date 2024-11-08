import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrappointmentListComponent } from './drappointment-list.component';

describe('DrappointmentListComponent', () => {
  let component: DrappointmentListComponent;
  let fixture: ComponentFixture<DrappointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrappointmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrappointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
