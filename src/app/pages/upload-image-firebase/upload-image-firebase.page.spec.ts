import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageFirebasePage } from './upload-image-firebase.page';

describe('UploadImageFirebasePage', () => {
  let component: UploadImageFirebasePage;
  let fixture: ComponentFixture<UploadImageFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageFirebasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
