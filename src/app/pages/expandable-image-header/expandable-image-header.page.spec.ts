import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableImageHeaderPage } from './expandable-image-header.page';

describe('ExpandableImageHeaderPage', () => {
  let component: ExpandableImageHeaderPage;
  let fixture: ComponentFixture<ExpandableImageHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableImageHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableImageHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
