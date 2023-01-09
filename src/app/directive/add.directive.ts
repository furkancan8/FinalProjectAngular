import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseModel } from '../models/responseModel';
import { AdminService } from '../services/admin.service';

@Directive({
  selector: '[appAdd]',
  providers:[AdminService]
})
export class AddDirective {

  constructor(private adminService:AdminService) {}
  @Input() productAddForm:FormGroup;
  @Input() entity:string;
   @HostListener("click")
  add(){
    //value obje şeklinde çalışır bütün degerleri verir
    //form yolunu not al
    //response sadece veri döndürüyor meesage için tip
    if(this.entity=="product")
    {
      let productModel=Object.assign({},this.productAddForm.value);
       this.adminService.addProduct(productModel).subscribe({
        next:(response:ResponseModel)=>{
         console.log(response.success)},
      //   error:(responseError)=>{
      //   if(responseError.error.Errors.lenght>0){
      //     console.log(responseError.error.Errors)
      //   }
      // }
      });
    }else if(this.entity=="category")
    {
      let productModel=Object.assign({},this.productAddForm.value);
      this.adminService.addProduct(productModel).subscribe({
       next:(response:ResponseModel)=>{
        console.log(response.success)},
     //   error:(responseError)=>{
     //   if(responseError.error.Errors.lenght>0){
     //     console.log(responseError.error.Errors)
     //   }
     // }
    });
  }
 }
}
