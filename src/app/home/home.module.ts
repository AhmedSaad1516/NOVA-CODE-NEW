import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { Section1Component } from './components/section1/section1.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';
import { Section6Component } from './components/section6/section6.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
@NgModule({
  declarations: [
    HomeMainComponent,
    Section1Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section2Component,
    Section3Component


  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    HomeRoutingModule,
    CarouselModule,
    GoogleMapsModule,
    FormsModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],

})
export class HomeModule { }
