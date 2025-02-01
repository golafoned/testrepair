import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent {
  isMenuOpen = false;
  currentLang: string = 'ua'; // Мова за замовчуванням

  @Output() languageChange = new EventEmitter<string>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  switchLang(lang: string) {
    this.currentLang = lang; 
    this.languageChange.emit(lang);
  }
}
