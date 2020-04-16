import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEntryComponent } from './document-entry.component';

describe('DocumentEntryComponent', () => {
  let component: DocumentEntryComponent;
  let fixture: ComponentFixture<DocumentEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
