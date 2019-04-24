import { TestBed } from '@angular/core/testing';

import { NoteServicesService } from './note-services.service';

describe('NoteServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteServicesService = TestBed.get(NoteServicesService);
    expect(service).toBeTruthy();
  });
});
