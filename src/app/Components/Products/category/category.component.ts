import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/Product/category';
import { Product } from 'src/app/models/Product/product';
import { SideCategory } from 'src/app/models/Product/sideCateogry';
import { CategoryService } from 'src/app/services/Product/category.service';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit{
  //html in kullanıcak oldugu data tutucular
  categories:Category[]=[];
  sideCategories:SideCategory[]=[]
  products:Product[]=[]
  categoryId:number;
  //strict özelligini devre dışı bırakıp interface yapısını kullandık.
  currentCategory:Category;
  constructor(private categoryService:CategoryService,private productService:ProductService,private activateRoute:ActivatedRoute){

  }
  ngOnInit(): void {
   this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }
  setCurrentCategory(category:Category){
    //click yapıldıgı zaman html tarafı currentCategory vasıtası ile Category ulaşabilir
    this.currentCategory=category;
  }
  getCurrentCategoryClass(category:Category){
      if(category==this.currentCategory)
      {
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
  }
  getAllCategoryClass()
  {
    if(!this.currentCategory)
    {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getSideCategory(categoryId:number){
    this.categoryService.getSideCategory(categoryId).subscribe(res=>{
      this.sideCategories=res.data
    })
      this.categoryId=categoryId
  }
  getSideCategoryForProduct(categoryId:number,sideCategoryId:number)
  {
    this.productService.getSideCategoryForProduct(categoryId,sideCategoryId).subscribe(res=>{
      this.products=res.data
    })
  }
}
