import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:() => import('./home/home.module').then(h => h.HomeModule)},

 {path:'',loadChildren:() => import('./auth/login-main/login-main.module').then(L => L.LoginMainModule)},
  // {path:'',loadChildren:() => import('./franchise-program/franchise-program.module').then(A => A.FranchiseProgramModule)},

  // {path:'',loadChildren:() => import('./aboutus2/aboutus2.module').then(A => A.Aboutus2Module)},
  // {path:'',loadChildren:() => import('./about-us-3/about-us-3.module').then(A => A.AboutUs3Module)},
  // {path:'',loadChildren:() => import('./about-us-4/about-us-4.module').then(A => A.AboutUs4Module)},
  // {path:'',loadChildren:() => import('./contact-us/contact-us.module').then(c => c.ContactUsModule)},
  // {path:'',loadChildren:() => import('./contactlast/contactlast.module').then(c => c.ContactlastModule)},
  // {path:'',loadChildren:() => import('./our-services/our-services.module').then(c => c.OurServicesModule)},

  // {path:'',loadChildren:() => import('./our-location/our-location.module').then(c => c.OurLocationModule)},
  // {path:'',loadChildren:() => import('./join-us/join-us.module').then(c => c.JoinUsModule)},
  // {path:'',loadChildren:() => import('./appshow/appshow.module').then(c => c.AppshowModule)},
  // {path:'',loadChildren:() => import('./privacy/privacy.module').then(c => c.PrivacyModule)},
  // {path:'',loadChildren:() => import('./easy/easy.module').then(c => c.EasyModule)},
  // {path:'',loadChildren:() => import('./detalis-post/detalis-post.module').then(c => c.DetalisPostModule)},
  // {path:'',loadChildren:() => import('./recruitment/recruitment.module').then(c => c.RecruitmentModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
