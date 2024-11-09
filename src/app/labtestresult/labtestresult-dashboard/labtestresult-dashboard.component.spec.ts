import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestresultDashboardComponent } from './labtestresult-dashboard.component';

describe('LabtestresultDashboardComponent', () => {
  let component: LabtestresultDashboardComponent;
  let fixture: ComponentFixture<LabtestresultDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestresultDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestresultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
