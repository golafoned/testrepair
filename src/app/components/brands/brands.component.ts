import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css'],
    standalone: false
})
export class BrandsComponent {
  title: string = '';

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('brands.title').subscribe((translatedTitle: string) => {
      this.title = translatedTitle;
    });
  }
}