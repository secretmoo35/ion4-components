import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image-firebase',
  templateUrl: './upload-image-firebase.page.html',
  styleUrls: ['./upload-image-firebase.page.scss'],
})
export class UploadImageFirebasePage implements OnInit {
  image: string;
  constructor() { }

  ngOnInit() {
  }

  onUrlCallback(e) {
    console.log(e);
    alert(e);
    this.image = e;
  }

}
