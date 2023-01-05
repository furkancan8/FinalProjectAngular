import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-entity',
  templateUrl: './update-entity.component.html',
  styleUrls: ['./update-entity.component.css'],
  providers:[ProductService,AdminService]
})
export class UpdateEntityComponent implements OnInit {
   product:Product[]=[]
   category:Category[]=[]
   productFormGroup:FormGroup;
  constructor(private adminService:AdminService,private activeRoute:ActivatedRoute,private productService:ProductService,private formBuilder:FormBuilder) {

  }
  ngOnInit(): void {
   this.activeRoute.params.subscribe(response=>{
    if(response["productId"])
    {
      this.getProductDetails(response["productId"])
    }else{
      console.log("hata ula");
    }})
   this.createProductForm();
  }
  getProductDetails(entityId:number)
  {
    this.productService.getProductDetails(entityId).subscribe(response=>{
      this.product.push(response.data)
    })
  }
  createProductForm()
  {
    this.productFormGroup=this.formBuilder.group({
      productName:["",Validators.required]
    })
  }
  updateProduct()
  {
    if(this.productFormGroup.valid)
    {
      let productModel=Object.assign({},this.productFormGroup.value)
      this.adminService.updateProduct(productModel).subscribe(response=>{
          console.log(response.success)
          console.log(response.message)
      })
    }
  }
}
