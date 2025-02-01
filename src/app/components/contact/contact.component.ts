import { Component, OnInit } from '@angular/core';
import { TelegramService } from '../../servicesBot/telegram.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent implements OnInit {
    isOpen = false;
    name: string = '';
    address: string = '';
    applianceType: string = '';
    phone: string = '';
    message: string = '';
    isLoading: boolean = false;
    successMessage: string = '';
    errorMessage: string = '';

    applianceOptions: any[] = [];

    constructor(private telegramService: TelegramService, private translate: TranslateService) {
        this.translate.setDefaultLang('ua');
    }

    ngOnInit() {
        this.loadApplianceOptions();
        this.translate.onLangChange.subscribe(() => {
            this.loadApplianceOptions(); 
        });
    }

    openModal() {
        this.isOpen = true;
    }

    loadApplianceOptions() {
        this.translate.get([
            'contact.appliance.fridge',
            'contact.appliance.washingMachine',
            'contact.appliance.dishwasher',
            'contact.appliance.airConditioner',
            'contact.appliance.cooktop',
            'contact.appliance.electricStove',
            'contact.appliance.oven',
            'contact.appliance.freezer',
            'contact.appliance.dryer'
        ]).subscribe(translations => {
            this.applianceOptions = [
                { label: translations['contact.appliance.fridge'], value: 'fridge' },
                { label: translations['contact.appliance.washingMachine'], value: 'washing-machine' },
                { label: translations['contact.appliance.dishwasher'], value: 'dishwasher' },
                { label: translations['contact.appliance.airConditioner'], value: 'air-conditioner' },
                { label: translations['contact.appliance.cooktop'], value: 'cooktop' },
                { label: translations['contact.appliance.electricStove'], value: 'electric-stove' },
                { label: translations['contact.appliance.oven'], value: 'oven' },
                { label: translations['contact.appliance.freezer'], value: 'freezer' },
                { label: translations['contact.appliance.dryer'], value: 'dryer' }
            ];
        });
    }

    closeModal() {
        this.isOpen = false;
        this.resetForm();
    }

    resetForm() {
        this.name = '';
        this.phone = '';
        this.message = '';
        this.successMessage = '';
        this.errorMessage = '';
    }

    onSubmit() {
      // Логування значень полів
      console.log('Name:', this.name);
      console.log('Phone:', this.phone);
      console.log('Address:', this.address);
      console.log('Appliance Type:', this.applianceType);
      console.log('Message:', this.message);
  
      const cleanedPhone = this.phone.replace(/\D/g, ''); // Видаляє всі нецифрові символи
      const phonePattern = /^\d{10}$/; // Перевіряє, чи номер складається з 10 цифр
  
      // Перевірка наявності значень у всіх полях
      if (!this.name || !this.phone || !this.message || !this.applianceType) {
          this.errorMessage = this.translate.instant('contact.error.fillAllFields'); 
          return;
      }
  
      // Перевірка формату номера телефону
      if (!phonePattern.test(cleanedPhone)) {
          this.errorMessage = this.translate.instant('contact.error.phoneFormat'); 
          return;
      }
  
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';
  
      const selectedAppliance = this.applianceOptions.find(option => option.value === this.applianceType);
      const applianceLabel = selectedAppliance ? selectedAppliance.label : 'Unknown Appliance';
  
      const formattedMessage = `
          <b>${this.translate.instant('New Message')}:</b>
          <b>${this.translate.instant('Name')}:</b> ${this.name}
          <b>${this.translate.instant('Phone')}:</b> ${this.phone}
          <b>${this.translate.instant('Message')}:</b> ${this.message}
          <b>${this.translate.instant('Appliance Type')}:</b> ${applianceLabel}
      `;
  
      this.telegramService.sendMessage(formattedMessage).subscribe({
          next: () => {
              this.isLoading = false;
              this.successMessage = this.translate.instant('contact.success.messageSent'); 
              this.resetForm();
              this.closeModal();
          },
          error: () => {
              this.isLoading = false;
              this.errorMessage = this.translate.instant('contact.error.sending'); 
          }
      });
  }
}