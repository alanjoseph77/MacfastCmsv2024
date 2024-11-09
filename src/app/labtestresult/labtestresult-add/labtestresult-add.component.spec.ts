import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestresultAddComponent } from './labtestresult-add.component';

describe('LabtestresultAddComponent', () => {
  let component: LabtestresultAddComponent;
  let fixture: ComponentFixture<LabtestresultAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestresultAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestresultAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
