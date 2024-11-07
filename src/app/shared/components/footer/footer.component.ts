import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showScrollToTopButton = false;
  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    this.showScrollToTopButton = false;
  }
}
