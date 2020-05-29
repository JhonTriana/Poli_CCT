import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePswdComponent } from './restore-pswd.component';

describe('RestorePswdComponent', () => {
  let component: RestorePswdComponent;
  let fixture: ComponentFixture<RestorePswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
