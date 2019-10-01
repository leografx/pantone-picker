import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldPickerComponent } from './fold-picker.component';

describe('FoldPickerComponent', () => {
  let component: FoldPickerComponent;
  let fixture: ComponentFixture<FoldPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
