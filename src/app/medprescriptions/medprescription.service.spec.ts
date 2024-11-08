import { TestBed } from '@angular/core/testing';

import { MedprescriptionService } from './medprescription.service';

describe('MedprescriptionService', () => {
  let service: MedprescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedprescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
