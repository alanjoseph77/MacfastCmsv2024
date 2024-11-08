import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabadviceHistoryComponent } from './labadvice-history.component';

describe('LabadviceHistoryComponent', () => {
  let component: LabadviceHistoryComponent;
  let fixture: ComponentFixture<LabadviceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabadviceHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabadviceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
