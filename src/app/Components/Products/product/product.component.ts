import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/Product/product.service';
import { CardService } from 'src/app/services/Product/card.service';
import { ThisReceiver } from '@angular/compiler';
import { AuthService } from 'src/app/services/User/auth.service';
import { ProductImgService } from 'src/app/services/Product/product-img.service';
import { ProductImg } from 'src/app/models/Product/productImg';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasketService } from 'src/app/services/User/basket.service';
import { SideCategory } from 'src/app/models/Product/sideCateogry';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService,CardService]
})
export class ProductComponent implements OnInit{
  id=localStorage.getItem("i_u");
  userId=parseInt(this.id);
  dataLoaded=false;
  product:ProductImg[]=[]
  products:Product[]=[]
  productsPop:Product[]=[]
  productid:number
  productImg:ProductImg[]=[]
  filterText="";
  imgaeUrl:'https://localhost:44331/';
  sideCategory:SideCategory
  basketAddForm:FormGroup
  tryFloat:number=1.5;
  //acrivateRoute=sitedeki url kısmını temsil eder
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute
    ,private cartService:CardService,private productImgService:ProductImgService,private formsBuilder:FormBuilder,
    private basketService:BasketService){}//private oldugunca sadece bu class ta kullanılabilir,dışardan çagrılamaz

    ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params["categoryId"] & params["sCategoryId"])//params ın içinde categoryId varsa
      {
        this.getSideCategoryForProduct(params["categoryId"],params["sCategoryId"])
      }else if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
      console.log(params)
    })
    this.getPopProductFirstTen();
    this.getProductImg(1);
    this.createBasketAddForm()
  }
  getProducts(){
    //bu kod async çalışır,subscribe burda olmasının sebebi aşagıdaki component kodlarıdır.çünkü async çalışır
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
     })
  }
  getProductsByCategory(categoryId:number){
    //bu kod async çalışır,subscribe burda olmasının sebebi aşagıdaki component kodlarıdır.çünkü async çalışır
      this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      console.log(response.data)
     })
  }
  getSideCategoryForProduct(categoryId:number,sideCategoryId:number)
  {
    this.productService.getSideCategoryForProduct(categoryId,sideCategoryId).subscribe(res=>{
      this.products=res.data
      console.log(this.products)
      this.dataLoaded=true;
    })
  }
  addToCard(product:Product){
   this.cartService.addToCard(product);
  }
  addToBasket(product:Product)
  {
    this.cartService.addToBasket(product)
  }
  getProductDetails(product:number){
    this.productService.getProductDetails(product);
  }
  getPopProductFirstTen()
  {
    this.productService.getPopProductFirstTen().subscribe(res=>{
    this.productsPop=res.data
    })
  }
  getProductImg(productId:number){
    this.productImgService.getProductImages(productId).subscribe(res=>{
     this.productImg=res.data
    })
  }
  getAllProductImg()
  {
    this.productImgService.getAllProductImages().subscribe(res=>{
      this.productImg=res.data
      console.log(res.data)
    })
  }
  getImageSource(productImage:ProductImg):string{
    let url:string = "https://localhost:44331/Uploads/Images/" + productImage.imagePath;
    return url;
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/starts-"+startValue+".png" ;
    return url;
  }
  getProductId(productId:number)
  {
    this.productid=productId;
    this.createBasketAddForm()
  }
  createBasketAddForm(){
      this.basketAddForm=this.formsBuilder.group({
      userId:[this.userId,Validators.required],
      productId:[this.productid,[Validators.required, Validators.pattern('^[0-9]+$')]],
     })
     this.basketAddForm.get('productId').setValue(this.productid);
  }
}
