import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
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

  openExpandableCustomHeaderPage() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('/expandable-custom-header');
  }
}
