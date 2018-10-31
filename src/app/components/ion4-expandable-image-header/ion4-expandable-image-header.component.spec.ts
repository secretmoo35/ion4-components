import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ion4ExpandableImageHeaderComponent } from './ion4-expandable-image-header.component';

describe('Ion4ExpandableImageHeaderComponent', () => {
  let component: Ion4ExpandableImageHeaderComponent;
  let fixture: ComponentFixture<Ion4ExpandableImageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ion4ExpandableImageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ion4ExpandableImageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
