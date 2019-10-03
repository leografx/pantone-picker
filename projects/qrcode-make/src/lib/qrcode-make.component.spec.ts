import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeMakeComponent } from './qrcode-make.component';

describe('QrcodeMakeComponent', () => {
  let component: QrcodeMakeComponent;
  let fixture: ComponentFixture<QrcodeMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
