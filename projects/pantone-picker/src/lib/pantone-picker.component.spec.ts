import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantonePickerComponent } from './pantone-picker.component';

describe('PantonePickerComponent', () => {
  let component: PantonePickerComponent;
  let fixture: ComponentFixture<PantonePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantonePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantonePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
