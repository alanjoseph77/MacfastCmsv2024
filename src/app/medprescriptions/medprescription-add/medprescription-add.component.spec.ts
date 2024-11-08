import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedprescriptionAddComponent } from './medprescription-add.component';

describe('MedprescriptionAddComponent', () => {
  let component: MedprescriptionAddComponent;
  let fixture: ComponentFixture<MedprescriptionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedprescriptionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedprescriptionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
