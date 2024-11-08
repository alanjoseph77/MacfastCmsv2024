import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestDashboardComponent } from './labtest-dashboard.component';

describe('LabtestDashboardComponent', () => {
  let component: LabtestDashboardComponent;
  let fixture: ComponentFixture<LabtestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
