import { Component, AfterViewInit } from '@angular/core';
import { ServicesAppService } from '@app/services/services-app.service';
import { OwlOptions } from 'ngx-owl-carousel-o'; // تأكد من استيراد OwlOptions
declare var $: any; // Declare jQuery
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component {
  customOptions: OwlOptions = {
    rtl: true,
    margin: 10,
    nav: true,
    dots: false,
    loop: true,

    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 5
      }
    }
  };

  ngAfterViewInit() {
    // هنا يتم تهيئة Owl Carousel
    $('.owl-carousel').owlCarousel(this.customOptions).on('changed.owl.carousel', (event: any) => {
      const currentItem = $('.owl-carousel .owl-item.active').eq(0).find('img').attr('src');
      const $mainImage = $('#main-image');
      $mainImage.addClass('fade-in');
      setTimeout(() => {
        $mainImage.attr('src', currentItem);
        $mainImage.removeClass('fade-in');
      }, 500);
    });
  }

constructor(private app_services:ServicesAppService){}


ngOnInit(){
this.get()
}

get(){
this.app_services.git()
this.app_services.ProDataObs.subscribe((data:any)=>{
  console.log(data);

})
}
}
