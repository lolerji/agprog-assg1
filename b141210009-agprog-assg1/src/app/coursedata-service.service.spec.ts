import { TestBed, inject } from '@angular/core/testing';

import { CoursedataServiceService } from './coursedata-service.service';

describe('CoursedataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursedataServiceService]
    });
  });

  it('should be created', inject([CoursedataServiceService], (service: CoursedataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
