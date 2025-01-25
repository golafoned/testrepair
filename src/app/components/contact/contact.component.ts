import { Component } from '@angular/core';
import { TelegramService } from '../../servicesBot/telegram.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private telegramService: TelegramService) {}

  onSubmit() {
    if (!this.name || !this.email || !this.phone || !this.message) {
      this.errorMessage = 'Будь ласка, заповніть усі поля.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formattedMessage = `
      <b>Нове повідомлення:</b>
      <b>Ім'я:</b> ${this.name}
      <b>Email:</b> ${this.email}
      <b>Телефон:</b> ${this.phone}  // Include phone in the message
      <b>Повідомлення:</b> ${this.message}
    `;

    this.telegramService.sendMessage(formattedMessage).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Повідомлення надіслано успішно!';
        this.name = '';
        this.email = '';
        this.phone = ''; 
        this.message = '';
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Сталася помилка. Спробуйте ще раз.';
      }
    });
  }
}