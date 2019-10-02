import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopePickerComponent } from './envelope-picker.component';

describe('EnvelopePickerComponent', () => {
  let component: EnvelopePickerComponent;
  let fixture: ComponentFixture<EnvelopePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
