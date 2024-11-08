import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestEditComponent } from './labtest-edit.component';

describe('LabtestEditComponent', () => {
  let component: LabtestEditComponent;
  let fixture: ComponentFixture<LabtestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
