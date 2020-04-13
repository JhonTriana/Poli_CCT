import { TestBed } from '@angular/core/testing';

import { UbicacionService } from './ubicacion.service';

describe('UbicacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicacionService = TestBed.get(UbicacionService);
    expect(service).toBeTruthy();
  });
});
