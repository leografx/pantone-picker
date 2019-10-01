import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPickerComponent } from './binding-picker.component';

describe('BindingPickerComponent', () => {
  let component: BindingPickerComponent;
  let fixture: ComponentFixture<BindingPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
