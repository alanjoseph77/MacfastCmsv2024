import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabadviceDashboardComponent } from './labadvice-dashboard.component';

describe('LabadviceDashboardComponent', () => {
  let component: LabadviceDashboardComponent;
  let fixture: ComponentFixture<LabadviceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabadviceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabadviceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
