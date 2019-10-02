import { TestBed } from '@angular/core/testing';

import { EnvelopePickerService } from './envelope-picker.service';

describe('EnvelopePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvelopePickerService = TestBed.get(EnvelopePickerService);
    expect(service).toBeTruthy();
  });
});
