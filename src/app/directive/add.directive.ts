import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseModel } from '../models/responseModel';
import { AdminService } from '../services/admin.service';
import { ContactService } from '../services/contact.service';
import { OperationclaimService } from '../services/operationclaim.service';

@Directive({
  selector: '[appAdd]',
  providers:[AdminService]
})
export class AddDirective {

  constructor(private adminService:AdminService,private operationClaimService:OperationclaimService,private contactService:ContactService
  ) {}
  @Input() entityAddForm:FormGroup;
  @Input() entity:string;
   @HostListener("click")
  add(){
    //value obje şeklinde çalışır bütün degerleri verir
    //form yolunu not al
    //response sadece veri döndürüyor meesage için tip
    if(this.entity=="product")
    {
      let entityModel=Object.assign({},this.entityAddForm.value);
       this.adminService.addProduct(entityModel).subscribe({
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
      let entityModel=Object.assign({},this.entityAddForm.value);
      this.adminService.addProduct(entityModel).subscribe({
       next:(response:ResponseModel)=>{
        console.log(response.success)},
     //   error:(responseError)=>{
     //   if(responseError.error.Errors.lenght>0){
     //     console.log(responseError.error.Errors)
     //   }
     // }
    });
  }else if(this.entity=="claim")
  {
    let entityModel=Object.assign({},this.entityAddForm.value);
    this.operationClaimService.cliamAdd(entityModel).subscribe(res=>{
      console.log(res.success)
    })
  }else if(this.entity=="contact")
  {
    let entityModel=Object.assign({},this.entityAddForm.value);
    this.contactService.addContact(entityModel).subscribe(res=>{
      console.log(res.success)
    })
  }
 }
}
