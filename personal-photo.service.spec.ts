import { TestBed } from '@angular/core/testing';

import { PersonalPhotoService } from './personal-photo.service';

describe('PersonalPhotoService', () => {
  let service: PersonalPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
