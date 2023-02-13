import { TestBed, inject } from '@angular/core/testing';

import { HardcodedAuthService } from './hardcoded-auth.service';

describe('HardcodedAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardcodedAuthService]
    });
  });

  it('should be created', inject([HardcodedAuthService], (service: HardcodedAuthService) => {
    expect(service).toBeTruthy();
  }));
});
