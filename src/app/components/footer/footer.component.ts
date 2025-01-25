import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contactInfo: string = '';
  workingHours: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations() {
    this.translate.get([
      'contact.contactInfo',
      'contact.workingHours',
      'contact.workingHoursValue',
      'contact.phone',
      'contact.email',
      'contact.address',
      'contact.addressValue'
    ]).subscribe(translations => {
      this.contactInfo = translations['contact.contactInfo'];
      this.workingHours = translations['contact.workingHours'] + ': ' + translations['contact.workingHoursValue'];
      this.phone = translations['contact.phone'];
      this.email = translations['contact.email'];
      this.address = translations['contact.address'] + ': ' + translations['contact.addressValue'];
    });
  }
}