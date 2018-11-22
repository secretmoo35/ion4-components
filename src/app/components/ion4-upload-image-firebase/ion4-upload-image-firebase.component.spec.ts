import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ion4UploadImageFirebaseComponent } from './ion4-upload-image-firebase.component';

describe('Ion4UploadImageFirebaseComponent', () => {
  let component: Ion4UploadImageFirebaseComponent;
  let fixture: ComponentFixture<Ion4UploadImageFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ion4UploadImageFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ion4UploadImageFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
