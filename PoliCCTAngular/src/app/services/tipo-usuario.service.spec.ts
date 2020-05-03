import { TestBed } from '@angular/core/testing';

import { TipoUsuarioService } from './tipo-usuario.service';

describe('TipoUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoUsuarioService = TestBed.get(TipoUsuarioService);
    expect(service).toBeTruthy();
  });
});
