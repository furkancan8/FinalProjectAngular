import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-home-page-section',
  templateUrl: './home-page-section.component.html',
  styleUrls: ['./home-page-section.component.css']
})
export class HomePageSectionComponent implements OnInit{
  id=localStorage.getItem("i_u");
  userId=parseInt(this.id);
  productPhone:Product[]=[]
  productBook:Product[]=[]
  veryReviewsProduct:Product[]=[]
  favoriteAddForm:FormGroup
  filterText="";
  productid:number
  warningView:boolean=false;
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  defaultFavoriteImage:string="https://localhost:44331/Uploads/Images/heart-product-white.png";
  productFavoriteImage:string="https://localhost:44331/Uploads/Images/heart-product-";
  ImgSource:string[]=[this.productFavoriteImage+"white.png",this.productFavoriteImage+"black.png"]
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  constructor(private productService:ProductService,private formsBuilder:FormBuilder) {

  }
  ngOnInit(): void {
  this.createFavoriteAddForm()
  this.getProductForNamePhone()
  this.getProductForNameBook()
  this.getVeryReviewsProduct()
  }
  IsProductDiscount(product:Product)
  {
    if(product.discount>0)
    {
      return "line-tag"
    }
    return ""
  }
  getProductDetails(product:number){
    this.productService.getProductDetails(product);
  }
  getImageSource(productImage:string):string{
    let url:string = "https://localhost:44331/Uploads/Images/" + productImage;
    return url;
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
    return url;
  }
  getVeryReviewsProduct()
  {
    this.productService.getVeryReviewsProduct().subscribe(res=>{
     this.veryReviewsProduct=res.data
    })
  }
  getProductForNamePhone()
  {
    this.productService.getAllProductForName("telefon").subscribe(res=>{
     this.productPhone=res.data.splice(0,6)
     console.log(this.productPhone)
    })
  }
  getProductForNameBook()
  {
    this.productService.getAllProductForName("kitap").subscribe(res=>{
     this.productBook=res.data.splice(0,6)
     console.log(this.productBook)
    })
  }
  getProductId(productId:number)
  {
    this.productid=productId;
    this.createFavoriteAddForm()
    this.warningView=true
    setTimeout(() => {
      this.warningView=false
    }, 1500);
  }
  createFavoriteAddForm(){
    this.favoriteAddForm=this.formsBuilder.group({
      userId:[this.userId,Validators.required],
      productId:[this.productid,[Validators.required, Validators.pattern('^[0-9]+$')]],
    })
    this.favoriteAddForm.get('productId').setValue(this.productid);
  }
}
