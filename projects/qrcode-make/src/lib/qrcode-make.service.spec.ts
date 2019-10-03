import { TestBed } from '@angular/core/testing';

import { QrcodeMakeService } from './qrcode-make.service';

describe('QrcodeMakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrcodeMakeService = TestBed.get(QrcodeMakeService);
    expect(service).toBeTruthy();
  });
});
