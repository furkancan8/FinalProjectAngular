import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'src/app/models/Product/cartItem';
import { Product } from 'src/app/models/Product/product';
import { Basket } from 'src/app/models/User/basket';
import { CardService } from 'src/app/services/Product/card.service';
import { ProductService } from 'src/app/services/Product/product.service';
import { BasketService } from 'src/app/services/User/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']

})
export class BasketComponent implements OnInit{
  id=localStorage.getItem("i_u")
  userId=parseInt(this.id)
  baskets:Basket[]=[]
  products:Product[]=[]
  basketInProducts:number[]=[]
  basketId:number
  productid:number
  basketAddForm:FormGroup
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  heartFavoriteIcon:string="https://localhost:44331/Uploads/Images/heart-favorite-red.png";
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  constructor(private basketService:BasketService,private productService:ProductService,private formsBuilder:FormBuilder) {}

 ngOnInit(): void {
  this.getByUserId(this.userId);
  this.createBasketAddForm();
 }

 getByUserId(userId:number)
 {
  this.basketService.getallUserBasket(userId).subscribe(res=>{
    this.baskets=res.data
    console.log(this.baskets)

      setTimeout(() => {
        res.data.forEach(element => {
          this.getProductById(element.productId)
          });
      }, 1000);
  })
 }
 getProductById(productId:number)
 {
    this.productService.getProductDetails(productId).subscribe(res=>{
      this.products.push(res.data)
      console.log(this.products)
     })
 }
 getStartImage(startValue:number){
  let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
  return url;
}
getProductDetails(product:number){
  this.productService.getProductDetails(product);
}
IsProductDiscount(product:Product)
{
  if(product.discount>0)
  {
    return "line-tag"
  }
  return ""
}
 getInBasketProductId(productId:number)
  {

    this.baskets.forEach(element => {
      if(element.productId===productId)
      {
        this.basketId=element.id
      }
    });
    return this.basketId
  }
  getProductId(productId:number)
  {
    this.productid=productId;
    this.createBasketAddForm()
  } //problem 1.ekleme hata veriyor 2.seferinde ekleme başarılı
  createBasketAddForm(){
    this.basketAddForm=this.formsBuilder.group({
    userId:[this.userId,Validators.required],
    productId:["",[Validators.required, Validators.pattern('^[0-9]+$')]],
   })
   this.basketAddForm.get('productId').setValue(this.productid);
}
}
