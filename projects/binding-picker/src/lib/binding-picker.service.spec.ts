import { TestBed } from '@angular/core/testing';

import { BindingPickerService } from './binding-picker.service';

describe('BindingPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BindingPickerService = TestBed.get(BindingPickerService);
    expect(service).toBeTruthy();
  });
});
