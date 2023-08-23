import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('es');
    this.initApp();
  }

  initApp() {

    // Esperamos a que el dispositivo este listo
    this.platform.ready().then(async () => {

      // Obtengo el idioma del dispositivo
      const language = await Device.getLanguageCode();

      // Cambio el idioma
      if (language.value) {
        this.translateService.use(language.value);
      }

    })

  }

}
