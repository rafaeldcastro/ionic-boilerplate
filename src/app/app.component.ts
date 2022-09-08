import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  template: `
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>`
})
export class AppComponent {

  constructor(
    private plt: Platform
  ) { }

  isMobile(): boolean {
    if (this.plt.is('capacitor')) {
      return true;
    }
    return false;
  }

}
