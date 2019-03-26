import { TestBed } from '@angular/core/testing';

import { ThlonGroupService } from './thlon-group.service';

describe('ThlonGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThlonGroupService = TestBed.get(ThlonGroupService);
    expect(service).toBeTruthy();
  });
});
