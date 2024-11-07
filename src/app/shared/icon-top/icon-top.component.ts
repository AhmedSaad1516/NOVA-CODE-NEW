
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-icon-top',
  templateUrl: './icon-top.component.html',
  styleUrls: ['./icon-top.component.css']
})
export class IconTopComponent {
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
