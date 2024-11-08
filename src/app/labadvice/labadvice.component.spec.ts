import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabadviceComponent } from './labadvice.component';

describe('LabadviceComponent', () => {
  let component: LabadviceComponent;
  let fixture: ComponentFixture<LabadviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabadviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
