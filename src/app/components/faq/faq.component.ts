import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface FAQ {
  questionKey: string;
  answerKey: string;  
  open?: boolean;     
  question?: string; 
  answer?: string;    
}

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css'],
    standalone: false
})
export class FaqComponent {
  header: string = '';
  faqList: FAQ[] = [
    { questionKey: 'faq.question1.question', answerKey: 'faq.question1.answer', open: false },
    { questionKey: 'faq.question2.question', answerKey: 'faq.question2.answer', open: false },
    { questionKey: 'faq.question3.question', answerKey: 'faq.question3.answer', open: false },
    { questionKey: 'faq.question4.question', answerKey: 'faq.question4.answer', open: false }
  ];
  toggleAnswer(faq: FAQ) {
    faq.open = !faq.open;
  }
}