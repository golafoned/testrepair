import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface AboutItem {
  icon: string;
  title: string;
  description: string;
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
    // Load the header translation
    this.translate.get('about.header').subscribe((header: string) => {
      this.header = header;
    });

    // Load translations for each item in the servicesList
    const itemKeys = [
      'about.servicesList.masterVisit.title',
      'about.servicesList.masterVisit.description',
      'about.servicesList.warranty.title',
      'about.servicesList.warranty.description',
      'about.servicesList.fastRepair.title',
      'about.servicesList.fastRepair.description',
      'about.servicesList.originalParts.title',
      'about.servicesList.originalParts.description',
      'about.servicesList.experiencedMasters.title',
      'about.servicesList.experiencedMasters.description',
      'about.servicesList.largestService.title',
      'about.servicesList.largestService.description'
    ];

    this.translate.get(itemKeys).subscribe((translations: any) => {
      this.items = [
        {
          icon: 'assets/icons/diagnostics.png',
          title: translations['about.servicesList.masterVisit.title'],
          description: translations['about.servicesList.masterVisit.description']
        },
        {
          icon: 'assets/icons/guarantee.png',
          title: translations['about.servicesList.warranty.title'],
          description: translations['about.servicesList.warranty.description']
        },
        {
          icon: 'assets/icons/fast-repair.png',
          title: translations['about.servicesList.fastRepair.title'],
          description: translations['about.servicesList.fastRepair.description']
        },
        {
          icon: 'assets/icons/original-parts.png',
          title: translations['about.servicesList.originalParts.title'],
          description: translations['about.servicesList.originalParts.description']
        },
        {
          icon: 'assets/icons/experienced-team.png',
          title: translations['about.servicesList.experiencedMasters.title'],
          description: translations['about.servicesList.experiencedMasters.description']
        },
        {
          icon: 'assets/icons/largest-service.png',
          title: translations['about.servicesList.largestService.title'],
          description: translations['about.servicesList.largestService.description']
        }
      ];
    });
  }
}