import { TestBed } from '@angular/core/testing';

import { SedeService } from './sede.service';

describe('SedeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SedeService = TestBed.get(SedeService);
    expect(service).toBeTruthy();
  });
});
