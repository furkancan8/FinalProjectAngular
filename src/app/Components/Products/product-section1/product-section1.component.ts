import { Component,OnInit } from '@angular/core';
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
  productImg:ProductImg[]=[]
  productCamera:Product[]=[]
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  constructor(private productImgService:ProductImgService,private productService:ProductService) {

  }

  ngOnInit(): void {
  this.getSideCategoryCamera();
  }

  getImageSource():string{
    let url:string = "https://localhost:44331/Uploads/Images/background-camera.jpg";
    return url;
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
}
