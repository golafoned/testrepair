import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'repair-site';

  constructor(private translate: TranslateService) {
    translate.addLangs(['ua', 'en', 'pl']);
    translate.setDefaultLang('ua'); 
  }

  ngOnInit() {
    const browserLang = this.translate.getBrowserLang() || 'ua'; 
    this.translate.use(browserLang.match(/ua|en|pl/) ? browserLang : 'ua');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}