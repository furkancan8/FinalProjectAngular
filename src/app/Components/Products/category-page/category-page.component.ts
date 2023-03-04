import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Product/brand';
import { CategoryBrand } from 'src/app/models/Product/categoryBrand';
import { Product } from 'src/app/models/Product/product';
import { CategoryService } from 'src/app/services/Product/category.service';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit{
  id=localStorage.getItem("i_u");
  userId=parseInt(this.id);
  productid:number
  warningView:boolean=false;
  categoryProduct:Product[]=[]
  populerProduct:Product[]=[]
  categoryBrand:CategoryBrand[]=[]
  brand:Brand[]=[]
  filterText=""
  favoriteAddForm:FormGroup
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  defaultFavoriteImage:string="https://localhost:44331/Uploads/Images/heart-product-white.png";
  constructor(private productService:ProductService,private activedRoute:ActivatedRoute,private categoryService:CategoryService
  ,private formBuilder:FormBuilder)
  {}
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      this.getCategoryOfProduct(params["categoryId"])
      this.getCategoryInPopulerProduct(params["categoryId"])
      this.getCategoryInBrand(params["categoryId"])
    })
  this.createFavoriteAddForm();
  }
  getCategoryOfProduct(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(res=>{
      this.categoryProduct=res.data
    })
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
  getCategoryInPopulerProduct(categoryId:number)
  {
    this.productService.getCategoryInPopulerProduct(categoryId).subscribe(res=>{
      this.populerProduct=[]
      this.populerProduct.push(res.data)
    })
  }
  getCategoryInBrand(categoryId:number)
  {
    this.categoryService.getCategoryInBrand(categoryId).subscribe(categoryres=>{
     categoryres.data.forEach(category => {
      this.brand=[]
      this.categoryService.getByBrandId(category.brandId).subscribe(brandres=>{
        brandres.data.forEach(brand => {
          if (!this.brand.some(b => b.id === brand.id)) {
            this.brand.push(brand);
          }
        });
      })
     });
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
    this.favoriteAddForm=this.formBuilder.group({
      userId:[this.userId,Validators.required],
      productId:[this.productid,[Validators.required, Validators.pattern('^[0-9]+$')]],
    })
    this.favoriteAddForm.get('productId').setValue(this.productid);
  }
}
