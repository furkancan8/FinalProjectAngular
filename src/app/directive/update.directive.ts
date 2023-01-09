import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Directive({
  selector: '[appUpdate]',
  providers:[AdminService]
})
export class UpdateDirective {

  constructor(private adminService:AdminService) { }
  @Input() productId:number
  @Input() productFormGroup:FormGroup
  @Input() entity:string;
  @HostListener("click")
  updateProduct()
  {
     if(this.entity="product")
     {
       let productModel=Object.assign({},this.productFormGroup.value)
       this.adminService.updateProduct(this.productId,productModel).subscribe(response=>{
           console.log(response.success)
       })
     }else if(this.entity="category"){
        let productModel=Object.assign({},this.productFormGroup.value)
        this.adminService.updateProduct(this.productId,productModel).subscribe(response=>{
        console.log(response.success)
     })
  }
}
}
