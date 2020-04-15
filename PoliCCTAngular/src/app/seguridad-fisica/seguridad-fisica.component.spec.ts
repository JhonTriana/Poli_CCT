import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadFisicaComponent } from './seguridad-fisica.component';

describe('SeguridadFisicaComponent', () => {
  let component: SeguridadFisicaComponent;
  let fixture: ComponentFixture<SeguridadFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
