import { TestBed } from '@angular/core/testing';

import { ThlonMenuService } from './thlon-menu.service';

describe('ThlonMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThlonMenuService = TestBed.get(ThlonMenuService);
    expect(service).toBeTruthy();
  });
});
