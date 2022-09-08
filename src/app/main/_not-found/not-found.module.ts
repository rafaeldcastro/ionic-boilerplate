import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NotFoundComponent } from './not-found.component';

/**MODULES */
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundComponent
      }
    ]),
    SharedModule
  ],
})
export class NotFoundModule {}
