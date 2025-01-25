import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  title: string ='' ;
  subtitle: string = '';
  orderRepair: string = '';

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }
  
  scrollToForm(): void {
    const formSection = document.getElementById('contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  loadTranslations() {
    this.translate.get(['hero.title', 'hero.subtitle', 'hero.orderRepair']).subscribe(translations => {
      this.title = translations['hero.title'];
      this.subtitle = translations['hero.subtitle'];
      this.orderRepair = translations['hero.orderRepair'];
    });
  }
}