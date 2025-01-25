import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Testimonial {
  icon: string;
  name: string;
  feedback: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      icon: 'assets/icons/user1.png',
      name: 'testimonials.testimonials.0.name',
      feedback: 'testimonials.testimonials.0.feedback'
    },
    {
      icon: 'assets/icons/user1.png',
      name: 'testimonials.testimonials.1.name',
      feedback: 'testimonials.testimonials.1.feedback'
    },
    {
      icon: 'assets/icons/user1.png',
      name: 'testimonials.testimonials.2.name',
      feedback: 'testimonials.testimonials.2.feedback'
    }
  ];
}