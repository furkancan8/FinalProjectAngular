import { Directive,Input,ElementRef, HostListener } from '@angular/core';
import { AdminService } from '../services/User/admin.service';
import { BasketService } from '../services/User/basket.service';

@Directive({
  selector: '[appDelete]',
  providers:[AdminService]
})
export class DeleteDirective {
  //elementRef=directive kullandıgımız html nesnesini getirir
  //RENDERER =html etiketini manipüle eder

  constructor(private element:ElementRef,private adminService:AdminService,private basketService:BasketService) { }

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
      }
  }
}
