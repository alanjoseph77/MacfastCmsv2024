import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedprescriptionEditComponent } from './medprescription-edit.component';

describe('MedprescriptionEditComponent', () => {
  let component: MedprescriptionEditComponent;
  let fixture: ComponentFixture<MedprescriptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedprescriptionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedprescriptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
