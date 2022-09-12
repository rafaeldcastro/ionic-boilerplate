import { Component } from '@angular/core';

/**MODELS */
import { appRoutes } from '@app/app-routes-names';

/**SERVICES */
import { StandardPageService } from '@shared/services/_base/standard-page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  pageTitle: string;

  constructor(
    private standardService: StandardPageService
  ) { 
    this.pageTitle = appRoutes.HOME.label;
    this.standardService.setPageTitle(this.pageTitle);
  }

}
