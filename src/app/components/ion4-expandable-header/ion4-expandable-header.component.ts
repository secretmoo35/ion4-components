import { Component, Input, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ion4-expandable-header',
  templateUrl: './ion4-expandable-header.component.html',
  styleUrls: ['./ion4-expandable-header.component.scss']
})
export class Ion4ExpandableHeaderComponent implements AfterViewInit {

  @Input() scrollArea: any;
  @Input() headerHeight: number;

  newHeaderHeight: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer,
    private platform: Platform
  ) {
    if (this.platform.is('android')) {
      this.headerHeight = 56;
    } else {
      this.headerHeight = 44;
    }
  }

  ngAfterViewInit() {
    const headerElement = this.element.nativeElement.children[0];
    this.renderer.setElementStyle(headerElement, 'height', this.headerHeight + 'px');
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(ev) {
    this.newHeaderHeight = this.headerHeight - ev.detail.scrollTop;
    this.newHeaderHeight = this.newHeaderHeight > 0 ? this.newHeaderHeight : 0;
    const headerElement = this.element.nativeElement.children[0];
    this.renderer.setElementStyle(headerElement, 'height', this.newHeaderHeight + 'px');
  }

}
