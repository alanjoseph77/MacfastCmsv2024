import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestresultListComponent } from './labtestresult-list.component';

describe('LabtestresultListComponent', () => {
  let component: LabtestresultListComponent;
  let fixture: ComponentFixture<LabtestresultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestresultListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestresultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
