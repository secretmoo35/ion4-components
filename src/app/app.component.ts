import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();

    // Config firebase by google
    const config = {
      apiKey: 'AIzaSyCweKU6JKA5Peppq6pVw3Iur7eIyZj7rGc',
      authDomain: 'i3chat-75016.firebaseapp.com',
      databaseURL: 'https://i3chat-75016.firebaseio.com',
      projectId: 'i3chat-75016',
      storageBucket: 'i3chat-75016.appspot.com',
      messagingSenderId: '386067578103'
    };
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      if (this.platform.is('android')) {
        this.statusBar.styleBlackOpaque();
      }
      this.splashScreen.hide();
    });
  }

  openHomePage() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/home');
  }

  openTabsSlidePage() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/tabs-slide');
  }

  openExpandableHeaderPage() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/expandable-header');
  }

  openExpandableImageHeaderPage() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/expandable-image-header');
  }

  openUpdloadImageFirebasePage() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/upload-image-firebase');
  }
}
