import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabadviceListComponent } from './labadvice-list.component';

describe('LabadviceListComponent', () => {
  let component: LabadviceListComponent;
  let fixture: ComponentFixture<LabadviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabadviceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabadviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
