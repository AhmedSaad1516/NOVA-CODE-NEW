import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'shared-libs/base.httpservice';
import { loginUser } from 'shared-libs/models/login';


@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http: HttpService) {
  }


  loginUser (model :loginUser):Observable<loginUser[]>{

    return this.http.post(`/auth/login`, model);

  }

  get(){
    return this.http.get(`/products`)
  }
}
