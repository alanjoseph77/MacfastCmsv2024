import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestresultEditComponent } from './labtestresult-edit.component';

describe('LabtestresultEditComponent', () => {
  let component: LabtestresultEditComponent;
  let fixture: ComponentFixture<LabtestresultEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestresultEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestresultEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
