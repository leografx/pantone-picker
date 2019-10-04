import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePlannerComponent } from './time-planner.component';

describe('TimePlannerComponent', () => {
  let component: TimePlannerComponent;
  let fixture: ComponentFixture<TimePlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
