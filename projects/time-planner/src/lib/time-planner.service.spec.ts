import { TestBed } from '@angular/core/testing';

import { TimePlannerService } from './time-planner.service';

describe('TimePlannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimePlannerService = TestBed.get(TimePlannerService);
    expect(service).toBeTruthy();
  });
});
