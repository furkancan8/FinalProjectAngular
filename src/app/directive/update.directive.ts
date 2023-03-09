import { Directive, HostListener, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterModel } from '../models/Admin/registerModel';
import { ResponseModel } from '../models/responseModel';
import { AdminService } from '../services/User/admin.service';
import { AuthService } from '../services/User/auth.service';
import { UserService } from '../services/User/user.service';

@Directive({
  selector: '[appUpdate]',
  providers:[AdminService]
})
export class UpdateDirective {

  constructor(private adminService:AdminService,private userService:UserService,private authService:AuthService) { }
  @Input() productId:number
  @Input() productFormGroup:FormGroup
  @Input() verifypPasswordFormGroup:FormGroup
  @Input() entity:string;
  @Input() changePaswwordAgain:number;
  @Input() changePassword:any;

  @HostListener("click")
  updateProduct()
  {
     if(this.entity=="product")
     {
       let productModel=Object.assign({},this.productFormGroup.value)
       this.adminService.updateProduct(this.productId,productModel).subscribe(response=>{
           console.log(response.success)
       })
     }else if(this.entity=="category"){
        let productModel=Object.assign({},this.productFormGroup.value)
        this.adminService.updateProduct(this.productId,productModel).subscribe(response=>{
        console.log(response.success)
     })
    }else if(this.entity=="user")
    {
      setTimeout(() => {
        let userModel=Object.assign({},this.productFormGroup.value)
        console.log(userModel)
        this.userService.update(userModel,this.productId).subscribe(res=>{
              console.log(userModel)
        })
      }, 1000);
    }
    else if(this.entity=="password")
    {
      setTimeout(() => {
        let loginModel=Object.assign({},this.verifypPasswordFormGroup.value)
        this.authService.verifyPasswordUser(loginModel).subscribe({
          next:(vres)=>{
            this.authService.IsTrueNowPassword=false
            if(vres.success==true)
            {
              if(this.changePassword==this.changePaswwordAgain)
              {
                  let registerModel=Object.assign({},this.productFormGroup.value)
                  this.authService.changePassword(registerModel,this.productId).subscribe(res=>{
                    console.log(res.success)
                      this.authService.IsChangePassword=res.success
                  })
                  this.authService.verifyPassword=false
              }else{
              this.authService.verifyPassword=true
              }
            }
          },
          error:(err)=>{
            if(err.success==undefined)
            {
              this.authService.IsTrueNowPassword=true
              this.authService.verifyPassword=true
            }
          }
        })
      }, 500)
    }
}
}
