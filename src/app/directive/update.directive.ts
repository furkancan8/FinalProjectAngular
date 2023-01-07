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
  @HostListener("click")
  updateProduct()
  {
     if(this.productFormGroup.valid)
     {
       let productModel=Object.assign({},this.productFormGroup.value)
       this.adminService.updateProduct(this.productId,productModel).subscribe(response=>{
           console.log(response.success)
       })
     }
  }
}
