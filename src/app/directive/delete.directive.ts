import { Directive,Input,ElementRef, HostListener } from '@angular/core';
import { AdminService } from '../services/User/admin.service';
import { BasketService } from '../services/User/basket.service';
import { ContactService } from '../services/User/contact.service';

@Directive({
  selector: '[appDelete]',
  providers:[AdminService]
})
export class DeleteDirective {
  //elementRef=directive kullandıgımız html nesnesini getirir
  //RENDERER =html etiketini manipüle eder

  constructor(private element:ElementRef,private adminService:AdminService,private basketService:BasketService,
    private contactService:ContactService) { }

  @Input() productId:number
  @Input() entity:string;
  @HostListener("click")//etikete tıklanıldığı zaman aktif olucak
  onclick()
  {
      if(this.entity=="product")
      {
        this.adminService.deleteProduct(this.productId).subscribe(response=>{
          console.log(response.success)
        })
      }else if(this.entity=="category")
      {
        this.adminService.deleteProduct(this.productId).subscribe(response=>{
          console.log(response.success)
        })
      }else if(this.entity=="basket")
      {
       this.basketService.deleteBasket(this.productId).subscribe(response=>{
        console.log(response.success)
       })
      }else if(this.entity=="contact")
      {
        console.log(this.productId)
        this.contactService.deleteContact(this.productId).subscribe(res=>{
          console.log(res.success)
        })
      }
  }
}
