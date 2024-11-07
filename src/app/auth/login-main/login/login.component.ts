import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesAppService } from '@app/services/services-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
constructor(private app_services: ServicesAppService ,
 private fb:FormBuilder

){}

ngOnInit(){
  this.createFormLogin()
}
createFormLogin(){
  this.loginForm = this.fb.group({
    email: ['' ,[Validators.required , Validators.email]],
    password: ['' , Validators.required],
    login_by:['email']

  })
}
visible:boolean = true;
changetype:boolean =true;

viewpass(){
  this.visible = !this.visible;
  this.changetype = !this.changetype;
}


add(){
  this.app_services.login(this.loginForm.value)

  this.app_services.loginUserDataObs.subscribe((data)=>{
    console.log(data);

  })
}

// this.app_services.login(this.loginForm.value).subscribe((data:any)=>{
//   console.log(data);

// },error =>{
//   console.log("my erro",error);

// })

}
