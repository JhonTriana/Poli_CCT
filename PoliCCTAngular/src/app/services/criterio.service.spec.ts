import { TestBed } from '@angular/core/testing';

import { CriterioService } from './criterio.service';

describe('CriterioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriterioService = TestBed.get(CriterioService);
    expect(service).toBeTruthy();
  });
});
