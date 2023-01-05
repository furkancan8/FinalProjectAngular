import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators } from '@angular/forms';
import { ResponseModel } from 'src/app/models/responseModel';
import { AdminService } from 'src/app/services/admin.service';
import { ProductService } from 'src/app/services/product.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers:[ProductService,AdminService]
})
export class ProductAddComponent implements OnInit{

  productAddForm:FormGroup;
  categoryvalue:number;
  constructor(private formsBuilder:FormBuilder,private productService:ProductService,private adminService:AdminService){}
  ngOnInit(): void {
    this.createProductAddForm();

  }
  createProductAddForm(){
   this.productAddForm=this.formsBuilder.group({
    productName:["",Validators.required],
    unitPrice:["",Validators.required],
    unitInStock:["",Validators.required],
    categoryId:["",Validators.required],
   })
  }
  add(){
    //value obje şeklinde çalışır bütün degerleri verir
    //form yolunu not al
    //response sadece veri döndürüyor meesage için tip
    if(this.productAddForm.valid)
    {
      let productModel=Object.assign({},this.productAddForm.value);
       this.productService.add(productModel).subscribe({
        next:(response:ResponseModel)=>{
         console.log(response.success)},
      //   error:(responseError)=>{
      //   if(responseError.error.Errors.lenght>0){
      //     console.log(responseError.error.Errors)
      //   }
      // }
      });
    }else{
      console.log("formunuz eksik")
    }
  }
}
