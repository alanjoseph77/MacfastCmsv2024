import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedprescriptionHistoryComponent } from './medprescription-history.component';

describe('MedprescriptionHistoryComponent', () => {
  let component: MedprescriptionHistoryComponent;
  let fixture: ComponentFixture<MedprescriptionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedprescriptionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedprescriptionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
