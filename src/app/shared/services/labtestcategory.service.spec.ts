import { TestBed } from '@angular/core/testing';

import { LabtestcategoryService } from './labtestcategory.service';

describe('LabtestcategoryService', () => {
  let service: LabtestcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtestcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
