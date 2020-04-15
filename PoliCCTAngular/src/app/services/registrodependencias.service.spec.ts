import { TestBed } from '@angular/core/testing';

import { RegistroDependenciasService } from './registrodependencias.service';

describe('RegistroDependenciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroDependenciasService = TestBed.get(RegistroDependenciasService);
    expect(service).toBeTruthy();
  });
});
