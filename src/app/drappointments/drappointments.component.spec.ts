import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrappointmentsComponent } from './drappointments.component';

describe('DrappointmentsComponent', () => {
  let component: DrappointmentsComponent;
  let fixture: ComponentFixture<DrappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrappointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
