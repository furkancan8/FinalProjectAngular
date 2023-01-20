import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/Product/product.service';
import { CardService } from 'src/app/services/Product/card.service';
import { ThisReceiver } from '@angular/compiler';
import { AuthService } from 'src/app/services/User/auth.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService,CardService]
})
export class ProductComponent implements OnInit{
  dataLoaded=false;
  products:Product[]=[]
  productsPop:Product[]=[]
  filterText="";
  //acrivateRoute=sitedeki url kısmını temsil eder
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute
    ,private cartService:CardService,private router:Router){}//private oldugunca sadece bu class ta kullanılabilir,dışardan çagrılamaz

    ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params["categoryId"])//params ın içinde categoryId varsa
      {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })//subscribe edilince params ın içine ulaşılabilir oluyor
    this.getPopProductFirstTen();
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
}
