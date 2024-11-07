import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component  {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1500,
    navText: ['<span><i class="fa-solid fa-angle-right"></i></span>', '<span><i class="fa-solid fa-angle-left"></i></span>'],
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      400: {
        items: 1,
        dots: true
      },
      740: {
        items: 2,
        dots: true
      },
      1200: {
        items: 3,
        nav: false,
        dots: true,
        loop: true,
      }
    },
    nav: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000
  }

  products = [
    { name: 'فستان بناتي 3 قطع', price: 270, image: 'assets/imgs/home-2.jpeg' },
    { name: 'فستان بناتي 3 قطع', price: 270, image: 'assets/imgs/home-2.jpeg' },
    { name: 'فستان بناتي 3 قطع', price: 270, image: 'assets/imgs/home-1.jpeg' },

  ];



}


