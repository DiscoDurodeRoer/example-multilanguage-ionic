import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private translate: TranslateService
  ) { }

  changeSpanish() {
    this.translate.use('es');
  }

  changeEnglish() {
    this.translate.use('en');
  }

}
