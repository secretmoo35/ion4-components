import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ion4TabsSlideComponent } from './ion4-tabs-slide.component';

describe('Ion4TabsSlideComponent', () => {
  let component: Ion4TabsSlideComponent;
  let fixture: ComponentFixture<Ion4TabsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ion4TabsSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ion4TabsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
