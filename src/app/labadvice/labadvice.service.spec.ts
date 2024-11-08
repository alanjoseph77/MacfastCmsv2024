import { TestBed } from '@angular/core/testing';

import { LabadviceService } from './labadvice.service';

describe('LabadviceService', () => {
  let service: LabadviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabadviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
