import { Component, ViewChild, ElementRef, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Slides } from '@ionic/angular';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ion4-tabs-slide',
  templateUrl: './ion4-tabs-slide.component.html',
  styleUrls: ['./ion4-tabs-slide.component.scss']
})
export class Ion4TabsSlideComponent implements AfterViewInit {

  @ViewChild('slider') slider: Slides;
  @ViewChild('segments', { read: ElementRef }) segments: ElementRef;
  @Input() initPage: any;
  @Input() keyPage: any;
  @Input() headers: Array<any> = [];
  @Input() backgroundColor: any;
  @Input() color: any;
  @Output() slide: EventEmitter<any> = new EventEmitter<any>();
  page: any = '0';
  slideOptions: any = {
    initialSlide: 0
  };

  constructor() { }

  ngAfterViewInit() {
    if (!this.backgroundColor) {
      this.backgroundColor = '#efefef';
    }
    if (!this.color) {
      this.color = '#4a4a4a';
    }

    this.initialPage();
  }

  initialPage() {
    const index = this.headers.findIndex((header) => {
      return header[this.keyPage].toString() === this.initPage.toString();
    });
    this.slideOptions = {
      initialSlide: index
    }
  }

  selectedTab(index) {
    this.slider.slideTo(index);
    this.initPage = this.headers[index].name;
  }

  slideChanged() {
    this.slider.getActiveIndex().then((index) => {
      const slides_count = this.segments.nativeElement.childElementCount;
      this.page = index.toString();
      this.initPage = this.headers[index].name;
      if (this.page >= slides_count) {
        this.page = (slides_count - 1).toString();
      }
      this.centerScroll();
      this.slide.emit(this.headers[index]);
    });
  }

  centerScroll() {
    if (!this.segments || !this.segments.nativeElement) {
      return;
    }
    const sizeLeft = this.sizeLeft();
    const sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
    let result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent / 2);

    result = (result > 0) ? result : 0;
    this.smoothScrollTo(result);
  }

  sizeLeft() {
    let size = 0;
    for (let i = 0; i < this.page; i++) {
      size += this.segments.nativeElement.children[i].clientWidth;
    }
    return size;
  }

  easeInOutQuart(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) {
      return distance / 2 * time * time * time * time + from;
    } else {
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }
  }

  smoothScrollTo(endX) {
    const startTime = new Date().getTime();
    const startX = this.segments.nativeElement.scrollLeft;
    const distanceX = endX - startX;
    const duration = 400;
    const timeout = 1000 / 60;
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = this.easeInOutQuart(time, startX, distanceX, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      this.segments.nativeElement.scrollLeft = newX;
    }, timeout);
  }
}
