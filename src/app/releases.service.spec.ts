import { TestBed, inject } from '@angular/core/testing';

import { ReleasesService } from './releases.service';

describe('ReleasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReleasesService]
    });
  });

  it('should be created', inject([ReleasesService], (service: ReleasesService) => {
    expect(service).toBeTruthy();
  }));
});
