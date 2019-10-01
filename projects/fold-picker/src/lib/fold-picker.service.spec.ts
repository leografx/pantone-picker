import { TestBed } from '@angular/core/testing';

import { FoldPickerService } from './fold-picker.service';

describe('FoldPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoldPickerService = TestBed.get(FoldPickerService);
    expect(service).toBeTruthy();
  });
});
