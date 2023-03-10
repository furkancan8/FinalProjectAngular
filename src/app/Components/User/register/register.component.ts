import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/User/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit{
   registerForm:FormGroup;
   loginError:boolean=false;
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) {

  }

  ngOnInit(): void {
    this.createRegisterForm()
  }
  createRegisterForm(){
  this.registerForm=this.formBuilder.group({
     email:["",Validators.required],
     password:["",Validators.required]
  })
  }
  register()
  {
    if(this.registerForm.valid)
    {
      let registerModel=Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe({
       next:(response)=>{
        console.log(response);
        this.router.navigate(["login"])
       },
       error:(resnpose)=>{
        console.log(resnpose);
        this.loginError=true
       }
      })
    }
  }
}
