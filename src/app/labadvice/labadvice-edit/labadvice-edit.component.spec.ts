import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabadviceEditComponent } from './labadvice-edit.component';

describe('LabadviceEditComponent', () => {
  let component: LabadviceEditComponent;
  let fixture: ComponentFixture<LabadviceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabadviceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabadviceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
