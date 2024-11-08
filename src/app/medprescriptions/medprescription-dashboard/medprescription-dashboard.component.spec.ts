import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedprescriptionDashboardComponent } from './medprescription-dashboard.component';

describe('MedprescriptionDashboardComponent', () => {
  let component: MedprescriptionDashboardComponent;
  let fixture: ComponentFixture<MedprescriptionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedprescriptionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedprescriptionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
