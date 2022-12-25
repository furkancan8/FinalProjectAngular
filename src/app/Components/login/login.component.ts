import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  constructor(private formbuilder:FormBuilder,private authService:AuthService) {}
  ngOnInit(): void {
    this.createloginForm();
  }
  createloginForm(){
    this.loginForm=this.formbuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe({
        next:(response)=>{
         console.log(response)
         localStorage.setItem("token",response.data.token)},//tarayıcıya token'i ekler.appications-localstroge
         error:(errorResponse)=>{
          console.log(errorResponse)
         }
      }
      )
    }
  }


}
