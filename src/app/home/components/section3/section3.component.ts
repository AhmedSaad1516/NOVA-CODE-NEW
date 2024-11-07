import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class Section3Component {
  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: [
      '<span><i class="fa-solid fa-angle-right"></i></span>',
      '<span><i class="fa-solid fa-angle-left"></i></span>'
    ],
    responsive: {
      0: {
        items: 1, // عرض عنصر واحد في الشاشات الصغيرة
        dots: true
      },
      400: {
        items: 1, // عرض عنصر واحد في الشاشات بين 400 بكسل و750 بكسل
        dots: true
      },
      750: {
        items: 1, // عرض عنصر واحد في الشاشات بين 750 بكسل و1700 بكسل
        dots: true
      },
      1700: {
        items: 2, // عرض عنصرين في الشاشات الكبيرة
        nav: true,
        dots: true
      }
    },
    nav: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1500
  };


  products = [
    { name: 'فستان بناتي 3 قطع', price: 270, image: 'assets/imgs/home-2.jpeg' },
    { name: 'فستان بناتي 3 قطع', price: 270, image: 'assets/imgs/home-2.jpeg' },
    { name: 'فستان بناتي 3 قطع', price: 270, image: 'assets/imgs/home-1.jpeg' },
    // Add more products as needed
  ];
}
