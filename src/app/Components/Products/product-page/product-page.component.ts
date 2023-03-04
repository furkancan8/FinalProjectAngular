import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  id=localStorage.getItem("i_u");
  userId=parseInt(this.id);
  dizi:string[]=[]
  products:Product[]=[]
  warningView:boolean=false;
  productid:number
  filterText="";
  favoriteAddForm:FormGroup
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  defaultFavoriteImage:string="https://localhost:44331/Uploads/Images/heart-product-white.png";
  constructor(private productService:ProductService,private route:ActivatedRoute,private formBuilder:FormBuilder) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const kelime=(JSON.parse(params['src']))
      this.dizi=kelime[0].split('+')
      this.dizi=[this.dizi.join(' ')]
      this.dizi.forEach(element => {
        this.productService.getAllProductForName(element).subscribe(res=>{
          this.products=res.data
          console.log(res.data)
        })
      });
    });
    this.createFavoriteAddForm()
  }
  getProductDetails(product:number){
    this.productService.getProductDetails(product);
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
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
    this.favoriteAddForm=this.formBuilder.group({
      userId:[this.userId,Validators.required],
      productId:[this.productid,[Validators.required, Validators.pattern('^[0-9]+$')]],
    })
    this.favoriteAddForm.get('productId').setValue(this.productid);
  }
}
