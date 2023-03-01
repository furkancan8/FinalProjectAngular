import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  categoryProduct:Product[]=[]
  populerProduct:Product[]=[]
  categoryBrand:CategoryBrand[]=[]
  brand:Brand[]=[]
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  filterText=""
  constructor(private productService:ProductService,private activedRoute:ActivatedRoute,private categoryService:CategoryService
  )
  {}
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      this.getCategoryOfProduct(params["categoryId"])
      this.getCategoryInPopulerProduct(params["categoryId"])
      this.getCategoryInBrand(params["categoryId"])
    })

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
  getCategoryInPopulerProduct(categoryId:number)
  {
    this.productService.GetCategoryInPopulerProduct(categoryId).subscribe(res=>{
      this.populerProduct=[]
      this.populerProduct.push(res.data)
    })
  }
  getCategoryInBrand(categoryId:number)
  {
    this.categoryService.getCategoryInBrand(categoryId).subscribe(categoryres=>{
     categoryres.data.forEach(category => {

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
}
