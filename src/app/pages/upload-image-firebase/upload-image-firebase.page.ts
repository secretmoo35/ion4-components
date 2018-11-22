import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image-firebase',
  templateUrl: './upload-image-firebase.page.html',
  styleUrls: ['./upload-image-firebase.page.scss'],
})
export class UploadImageFirebasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUrlCallback(e) {
    console.log(e);
    alert(e);
  }

}
