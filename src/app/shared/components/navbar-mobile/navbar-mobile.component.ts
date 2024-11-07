import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageServiceService } from '@app/services-translate/language-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent {
  showScrollToTopButton = false;
  lang:any

  constructor(private languageService: LanguageServiceService,
    private translate: TranslateService,){

    }
  @HostListener('window:scroll', [])
  onScroll() {
    const sectionElement = document.getElementById('nav2');
    if (sectionElement) {
      if (window.pageYOffset < 10) {
        sectionElement.classList.remove('shrink');
      } else {
        sectionElement.classList.add('shrink');
      }
    }
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    this.showScrollToTopButton = false;
  }
  ngOnInit() {


    this.onScroll(); // Ensure the navbar is in the correct state on load
}

}
