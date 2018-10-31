import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ion4ExpandableHeaderComponent } from './ion4-expandable-header.component';

describe('Ion4ExpandableHeaderComponent', () => {
  let component: Ion4ExpandableHeaderComponent;
  let fixture: ComponentFixture<Ion4ExpandableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ion4ExpandableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ion4ExpandableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
