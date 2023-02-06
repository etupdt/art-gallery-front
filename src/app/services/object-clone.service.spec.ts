import { TestBed } from '@angular/core/testing';

import { ObjectCloneService } from './object-clone.service';

describe('ObjectCloneService', () => {
  let service: ObjectCloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectCloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
