import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <ion-content>
      <ion-grid class="cstm-h100">
          <ion-row class="cstm-h100 ion-text-center ion-justify-content-center ion-align-items-center">
            <div>
              <img src="/assets/images/undraw_404.svg" class="cstm-w80" style="max-width: 400px;"/>
              <br><br>
              <strong>Error 404: Page not found</strong>
            </div>
          </ion-row>
      </ion-grid>
    </ion-content>
  `,
})
export class NotFoundComponent {

}
