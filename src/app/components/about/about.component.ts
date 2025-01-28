import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface AboutItem {
  icon: string;
  titleKey: string; 
  descriptionKey: string; 
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  header: string = '';
  items: AboutItem[] = []; 

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get('about.header').subscribe((header: string) => {
      this.header = header;
    });

    this.items = [
      {
        icon: 'assets/icons/diagnostics.png',
        titleKey: 'about.servicesList.masterVisit.title',
        descriptionKey: 'about.servicesList.masterVisit.description'
      },
      {
        icon: 'assets/icons/guarantee.png',
        titleKey: 'about.servicesList.warranty.title',
        descriptionKey: 'about.servicesList.warranty.description'
      },
      {
        icon: 'assets/icons/fast-repair.png',
        titleKey: 'about.servicesList.fastRepair.title',
        descriptionKey: 'about.servicesList.fastRepair.description'
      },
      {
        icon: 'assets/icons/original-parts.png',
        titleKey: 'about.servicesList.originalParts.title',
        descriptionKey: 'about.servicesList.originalParts.description'
      },
      {
        icon: 'assets/icons/experienced-team.png',
        titleKey: 'about.servicesList.experiencedMasters.title',
        descriptionKey: 'about.servicesList.experiencedMasters.description'
      },
      {
        icon: 'assets/icons/largest-service.png',
        titleKey: 'about.servicesList.largestService.title',
        descriptionKey: 'about.servicesList.largestService.description'
      }
    ];
  }
}