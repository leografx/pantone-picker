import { TestBed } from '@angular/core/testing';

import { PantonePickerService } from './pantone-picker.service';

describe('PantonePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PantonePickerService = TestBed.get(PantonePickerService);
    expect(service).toBeTruthy();
  });
});
