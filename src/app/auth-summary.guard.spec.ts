import { TestBed } from '@angular/core/testing';

import { AuthSummaryGuard } from './auth-summary.guard';

describe('AuthSummaryGuard', () => {
  let guard: AuthSummaryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSummaryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
