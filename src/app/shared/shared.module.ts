import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { TranslateComponent } from './translate/translate.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { IconTopComponent } from './icon-top/icon-top.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarMobileComponent,
    TranslateComponent,
    IconTopComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavbarMobileComponent,
    TranslateModule,
    TranslateComponent,
    IconTopComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
