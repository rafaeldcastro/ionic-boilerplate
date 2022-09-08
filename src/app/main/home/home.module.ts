import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';

/**MODULES */
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    SharedModule
  ],
})
export class HomeModule {}
