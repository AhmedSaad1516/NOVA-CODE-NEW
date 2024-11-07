import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMainRoutingModule } from './login-main-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { SharedLibsModule } from 'shared-libs/shared-libs.module';
import { ServicesAppService } from '@app/services/services-app.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginMainRoutingModule,
    SharedModule,
    SharedLibsModule
  ],

})
export class LoginMainModule { }
