import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdashboardComponent } from './authdashboard.component';

describe('AuthdashboardComponent', () => {
  let component: AuthdashboardComponent;
  let fixture: ComponentFixture<AuthdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
