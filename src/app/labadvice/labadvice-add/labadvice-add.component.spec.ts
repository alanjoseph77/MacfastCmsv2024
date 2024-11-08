import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabadviceAddComponent } from './labadvice-add.component';

describe('LabadviceAddComponent', () => {
  let component: LabadviceAddComponent;
  let fixture: ComponentFixture<LabadviceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabadviceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabadviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
