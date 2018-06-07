import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
templateUrl:'./login.component.html',
styles:[`
em { float:right;color:orange;padding-left:10px }
`]
})
export class LoginComponent{
    constructor(private authservice:AuthService,private router:Router){}
    userName
    password
    mouseoverlogin
login(formValues){
    this.authservice.loginUser(formValues.userName,formValues.password)
    this.router.navigate(["/events"])
    }
    cancel(){
        this.router.navigate(["/events"])
    }
}