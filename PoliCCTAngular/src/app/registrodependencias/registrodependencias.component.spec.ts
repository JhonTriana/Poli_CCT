import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDependenciasComponent } from './registrodependencias.component';

describe('RegistroDependenciasComponent', () => {
  let component: RegistroDependenciasComponent;
  let fixture: ComponentFixture<RegistroDependenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDependenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
