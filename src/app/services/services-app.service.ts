import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProxyService } from './proxy.service';
import { loginUser } from 'shared-libs/models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesAppService {

  constructor(private app_proxy: ProxyService ,private http:HttpClient){
  }
  public loginUserData = new BehaviorSubject<loginUser[]>([]);
  public loginUserDataObs = this.loginUserData.asObservable()

  public ProData = new BehaviorSubject<any[]>([]);
  public ProDataObs = this.ProData.asObservable()
 login(model :any){
  // return this.http.post('https://ecommerce.atcc.com.kw/api/v2/auth/login', model)
   this.app_proxy.loginUser(model).subscribe({
    next:(res:any)=>{
      this.loginUserData.next(res)
    },
    error: (err) => {
      console.error("Failed to load tax data:", err);
      this.loginUserData.next([]);
    }
   })
 }


 git(){
  this.app_proxy.get().subscribe((res:any)=>{
    this.ProData.next(res)
  })
}
}
