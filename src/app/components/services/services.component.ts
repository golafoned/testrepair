import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  visible?: boolean; 
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    { icon: 'assets/icons/fridge.png', title: 'services.servicesList.fridge.title', description: 'services.servicesList.fridge.description' },
    { icon: 'assets/icons/washing-machine.png', title: 'services.servicesList.washingMachine.title', description: 'services.servicesList.washingMachine.description' },
    { icon: 'assets/icons/dishwasher.png', title: 'services.servicesList.dishwasher.title', description: 'services.servicesList.dishwasher.description' },
    { icon: 'assets/icons/air-conditioner.png', title: 'services.servicesList.airConditioner.title', description: 'services.servicesList.airConditioner.description' },
    { icon: 'assets/icons/cooktop.png', title: 'services.servicesList.cooktop.title', description: 'services.servicesList.cooktop.description' },
    { icon: 'assets/icons/electric-stove.png', title: 'services.servicesList.electricStove.title', description: 'services.servicesList.electricStove.description' },
    { icon: 'assets/icons/oven.png', title: 'services.servicesList.oven.title', description: 'services.servicesList.oven.description' },
    { icon: 'assets/icons/freezer.png', title: 'services.servicesList.freezer.title', description: 'services.servicesList.freezer.description' },
    { icon: 'assets/icons/vacuum-cleaner.png', title: 'services.servicesList.vacuumCleaner.title', description: 'services.servicesList.vacuumCleaner.description' },
    { icon: 'assets/icons/dryer.png', title: 'services.servicesList.dryer.title', description: 'services.servicesList.dryer.description' }
  ];

  displayedServices: Service[] = [];
  showAll = false;

  constructor(private translate: TranslateService) {
    this.displayedServices = this.services.slice(0, 4); 
  }

  showMore() {
    this.showAll = true;
    this.displayedServices = this.services.map(service => ({ ...service, visible: true })); 
  }

  showLess() {
    this.showAll = false;
    this.displayedServices = this.services.slice(0, 4); 
  }
}