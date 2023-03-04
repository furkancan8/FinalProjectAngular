import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product/product';
import { ProductImg } from 'src/app/models/Product/productImg';
import { ProductImgService } from 'src/app/services/Product/product-img.service';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product-section1',
  templateUrl: './product-section1.component.html',
  styleUrls: ['./product-section1.component.css']
})
export class ProductSection1Component implements OnInit{
  id=localStorage.getItem("i_u");
  userId=parseInt(this.id);
  warningView:boolean=false;
  productid:number
  productImg:ProductImg[]=[]
  productCamera:Product[]=[]
  favoriteAddForm:FormGroup
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  defaultFavoriteImage:string="https://localhost:44331/Uploads/Images/heart-product-white.png";
  productFavoriteImage:string="https://localhost:44331/Uploads/Images/heart-product-";
  ImgSource:string[]=[this.productFavoriteImage+"white.png",this.productFavoriteImage+"black.png"]
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  constructor(private productImgService:ProductImgService,private productService:ProductService,private formsBuilder:FormBuilder) {

  }

  ngOnInit(): void {
  this.getSideCategoryCamera();
  this.createFavoriteAddForm();
  }

  getImageSource():string{
    let url:string = "https://localhost:44331/Uploads/Images/background-camera.jpg";
    return url;
  }
  IsProductDiscount(product:Product)
  {
    if(product.discount>0)
    {
      return "line-tag"
    }
    return ""
  }
  getSideCategoryCamera()
  {
    this.productService.getSideCategoryForProduct(6,23).subscribe(res=>{
    this.productCamera=res.data.slice(0,3)
    })
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
    return url;
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
