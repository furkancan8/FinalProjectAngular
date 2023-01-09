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
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  productAddForm:FormGroup;
  categoryvalue:number;
  constructor(private formsBuilder:FormBuilder)
  {

  }
  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
   this.productAddForm=this.formsBuilder.group({
    productName:["",Validators.required],
    unitPrice:["",Validators.required],
    unitInStock:["",Validators.required],
    categoryId:["",Validators.required]
   })
  }
}
