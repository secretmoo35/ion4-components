import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionSheetController, Platform, LoadingController } from '@ionic/angular';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ion4-upload-image-firebase',
  templateUrl: './ion4-upload-image-firebase.component.html',
  styleUrls: ['./ion4-upload-image-firebase.component.scss']
})
export class Ion4UploadImageFirebaseComponent implements OnInit {

  @Output() url: EventEmitter<any> = new EventEmitter<any>();
  image: any;
  constructor(
    private actionSheetController: ActionSheetController,
    private imagePicker: ImagePicker,
    private camera: Camera,
    private platform: Platform,
    private loading: LoadingController
  ) { }

  ngOnInit() {
  }

  async openAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select image file',
      buttons: [{
        text: 'Gallery',
        role: 'destructive',
        handler: () => {
          this.onImagePicker();
        }
      }, {
        text: 'Camera',
        role: 'destructive',
        handler: () => {
          this.onCamera();
        }
      }]
    });
    await actionSheet.present();
  }

  onImagePicker() {
    const options = {
      maximumImagesCount: 1,
      width: 900,
      quality: 70,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      if (results === 'OK') {
        results = [];
      }
      for (let i = 0; i < results.length; i++) {
        const fileUri = (<any>window).Ionic.WebView.convertFileSrc(results[i]);
        this.uploadImage(fileUri).then((uploadImageData) => {
          this.url.emit(uploadImageData);
        }, (uploadImageError) => {
          console.log(uploadImageError);
          alert('Upload image err: ' + JSON.stringify(uploadImageError));
        });
      }
    }, (err) => {
      alert(err);
    });
  }

  onCamera() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 900
    };

    this.camera.getPicture(options).then((imageData) => {
      const fileUri = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.uploadImage(fileUri).then((uploadImageData) => {
        this.url.emit(uploadImageData);
      }, (uploadImageError) => {
        console.log(uploadImageError);
        alert('Upload image err: ' + JSON.stringify(uploadImageError));
      });
    }, (err) => {
      alert(err);
    });
  }

  async uploadImage(imageString): Promise<any> {

    const loading = await this.loading.create({
      translucent: true,
    });
    await loading.present();

    return new Promise((resolve, reject) => {

      const storageRef = firebase.storage().ref();
      const filename = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
      const imageRef = storageRef.child(`images/${filename}.png`);
      let uploadTask: any;
      const metadata = {
        contentType: 'image/png',
      };

      const xhr = new XMLHttpRequest();
      xhr.open('GET', imageString, true);
      xhr.responseType = 'blob';
      xhr.onload = (e) => {
        const blob = new Blob([xhr.response], { type: 'image/png' });
        uploadTask = imageRef.put(blob, metadata);
        uploadTask.on('state_changed', (_snapshot) => {
          const progress = (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (_snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
          (_err) => {
            reject(_err);
            this.loading.dismiss();
          },
          (success) => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              resolve(downloadURL);
            });
            this.loading.dismiss();
          });

      };

      xhr.send();

    });

  }

}
