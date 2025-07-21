import { TestBed } from '@angular/core/testing';

import { DocGuardService } from './doc-guard-service';

describe('DocGuardService', () => {
  let service: DocGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
