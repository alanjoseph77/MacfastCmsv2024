import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedprescriptionsComponent } from './medprescriptions.component';

describe('MedprescriptionsComponent', () => {
  let component: MedprescriptionsComponent;
  let fixture: ComponentFixture<MedprescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedprescriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedprescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
