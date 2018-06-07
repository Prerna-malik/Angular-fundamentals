import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em {float:right;color:orange;padding-left:10px; }
  .error { background-color:grey }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  firstName:FormControl
  lastName:FormControl
  constructor(private router:Router,private authservice:AuthService){}
       ngOnInit(){
       this.firstName=new FormControl(this.authservice.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')]);
       this.lastName=new FormControl(this.authservice.currentUser.lastName,Validators.required);
       this.profileForm=new FormGroup({
         firstName:this.firstName,
         lastName:this.lastName
       });
       }
       saveProfile(formValues){
         if(this.profileForm.valid){
         this.authservice.updateCurrentUser(formValues.firstName,formValues.lastName)
         this.router.navigate(['/events'])
        }
       }
       cancel(){
        this.router.navigate(['/events'])
       }
       validateLastName(){
        return this.profileForm.controls.lastName.invalid && this.profileForm.controls.lastName.touched
       }
       validateFirstName(){
        return this.profileForm.controls.firstName.invalid && this.profileForm.controls.firstName.touched
       }
}