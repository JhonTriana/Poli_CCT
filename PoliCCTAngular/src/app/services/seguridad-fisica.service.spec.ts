import { TestBed } from '@angular/core/testing';

import { SeguridadFisicaService } from './seguridad-fisica.service';

describe('SeguridadFisicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeguridadFisicaService = TestBed.get(SeguridadFisicaService);
    expect(service).toBeTruthy();
  });
});
