import { TestBed } from '@angular/core/testing';

import { DrappointentService } from './drappointent.service';

describe('DrappointentService', () => {
  let service: DrappointentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrappointentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
