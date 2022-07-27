import { TestBed } from '@angular/core/testing';

import { CusService } from './cus.service';

describe('CusService', () => {
  let service: CusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
