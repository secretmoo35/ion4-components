import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-slide',
  templateUrl: './tabs-slide.page.html',
  styleUrls: ['./tabs-slide.page.scss'],
})
export class TabsSlidePage implements OnInit {
  tabs: Array<any> = [{
    name: 'Segment 1'
  }, {
    name: 'Segment 2'
  }, {
    name: 'Segment 3'
  }, {
    name: 'Segment 4'
  }, {
    name: 'Segment 5'
  }, {
    name: 'Segment 6'
  }];
  constructor() { }

  ngOnInit() {
  }

  onSlide(e) {
    console.log(e);
  }

}
