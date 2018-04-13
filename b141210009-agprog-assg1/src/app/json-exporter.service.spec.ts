import { TestBed, inject } from '@angular/core/testing';

import { JsonExporterService } from './json-exporter.service';

describe('JsonExporterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonExporterService]
    });
  });

  it('should be created', inject([JsonExporterService], (service: JsonExporterService) => {
    expect(service).toBeTruthy();
  }));
});
