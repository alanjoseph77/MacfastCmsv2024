import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedprescriptionListComponent } from './medprescription-list.component';

describe('MedprescriptionListComponent', () => {
  let component: MedprescriptionListComponent;
  let fixture: ComponentFixture<MedprescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedprescriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedprescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
