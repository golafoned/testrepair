import { Component } from '@angular/core';

interface Testimonial {
  nameKey: string;
  feedback: string;
  location: string;
  date: string;
}

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.css'],
    standalone: false
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      nameKey: 'testimonials.testimonial1.name',
      feedback: 'testimonials.testimonial1.feedback',
      location: 'testimonials.testimonial1.location',
      date: 'testimonials.testimonial1.date',
    },
    {
      nameKey: 'testimonials.testimonial2.name',
      feedback: 'testimonials.testimonial2.feedback',
      location: 'testimonials.testimonial2.location',
      date: 'testimonials.testimonial2.date',
    },
    {
      nameKey: 'testimonials.testimonial3.name',
      feedback: 'testimonials.testimonial3.feedback',
      location: 'testimonials.testimonial3.location',
      date: 'testimonials.testimonial3.date',
    },
    {
      nameKey: 'testimonials.testimonial3.name',
      feedback: 'testimonials.testimonial3.feedback',
      location: 'testimonials.testimonial3.location',
      date: 'testimonials.testimonial3.date',
    },
    {
      nameKey: 'testimonials.testimonial3.name',
      feedback: 'testimonials.testimonial3.feedback',
      location: 'testimonials.testimonial3.location',
      date: 'testimonials.testimonial3.date',
    },
    {
      nameKey: 'testimonials.testimonial3.name',
      feedback: 'testimonials.testimonial3.feedback',
      location: 'testimonials.testimonial3.location',
      date: 'testimonials.testimonial3.date',
    },
    {
      nameKey: 'testimonials.testimonial3.name',
      feedback: 'testimonials.testimonial3.feedback',
      location: 'testimonials.testimonial3.location',
      date: 'testimonials.testimonial3.date',
    },
    {
      nameKey: 'testimonials.testimonial3.name',
      feedback: 'testimonials.testimonial3.feedback',
      location: 'testimonials.testimonial3.location',
      date: 'testimonials.testimonial3.date',
    }
  ];
}