import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/Product/product.service';
import { CardService } from 'src/app/services/Product/card.service';
import { ThisReceiver } from '@angular/compiler';
import { AuthService } from 'src/app/services/User/auth.service';
import { ProductImgService } from 'src/app/services/Product/product-img.service';
import { ProductImg } from 'src/app/models/Product/productImg';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService,CardService]
})
export class ProductComponent implements OnInit{
  dataLoaded=false;
  product:ProductImg[]=[]
  products:Product[]=[]
  productsPop:Product[]=[]
  productImg:ProductImg[]=[]
  filterText="";
  imgaeUrl:'https://localhost:44331/';
  //acrivateRoute=sitedeki url kısmını temsil eder
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute
    ,private cartService:CardService,private productImgService:ProductImgService){}//private oldugunca sadece bu class ta kullanılabilir,dışardan çagrılamaz

    ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params["categoryId"])//params ın içinde categoryId varsa
      {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
    this.getPopProductFirstTen();
    this.getProductImg(1);
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
      this.dataLoaded=true;
     })
  }
  addToCard(product:Product){
   this.cartService.addToCard(product);
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
     console.log(res.data)
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

}
