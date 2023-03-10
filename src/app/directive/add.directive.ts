import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseModel } from '../models/responseModel';
import { AdminService } from '../services/User/admin.service';
import { BasketService } from '../services/User/basket.service';
import { ContactService } from '../services/User/contact.service';
import { FavoriteService } from '../services/User/favorite.service';
import { OperationclaimService } from '../services/User/operationclaim.service';

@Directive({
  selector: '[appAdd]',
  providers:[AdminService]
})
export class AddDirective {

  constructor(private adminService:AdminService,private operationClaimService:OperationclaimService,private contactService:ContactService
  ,private basketService:BasketService,private favoriteService:FavoriteService) {}
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
  }else if(this.entity=="basket")
  {
    setTimeout(()=>{
      let entityModel=Object.assign({},this.entityAddForm.value);
      this.basketService.addBasket(entityModel).subscribe(res=>{
        console.log(res.success)
      })
    },1000)
  }else if(this.entity=="favorite")
  {
    setTimeout(()=>{
      let entityModel=Object.assign({},this.entityAddForm.value);
      this.favoriteService.addUserFavorite(entityModel).subscribe(res=>{
        console.log(res.success)
      })
    },1000)
  }
 }
}
