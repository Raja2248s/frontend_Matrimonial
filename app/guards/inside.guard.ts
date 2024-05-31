import { CanActivateFn } from '@angular/router';

export const insideGuard: CanActivateFn = (route, state) => {
  return true;
};
