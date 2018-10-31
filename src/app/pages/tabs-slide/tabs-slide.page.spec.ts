import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSlidePage } from './tabs-slide.page';

describe('TabsSlidePage', () => {
  let component: TabsSlidePage;
  let fixture: ComponentFixture<TabsSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
