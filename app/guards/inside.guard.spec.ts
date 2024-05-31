import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { insideGuard } from './inside.guard';

describe('insideGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => insideGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
