import { TestBed, inject } from '@angular/core/testing';

import { XmlExporterService } from './xml-exporter.service';

describe('XmlExporterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlExporterService]
    });
  });

  it('should be created', inject([XmlExporterService], (service: XmlExporterService) => {
    expect(service).toBeTruthy();
  }));
});
