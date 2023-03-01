import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/models/Product/category';
import { Product } from 'src/app/models/Product/product';
import { SideCategory } from 'src/app/models/Product/sideCateogry';
import { UnderCategory } from 'src/app/models/Product/underCategory';
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
  getData:boolean=true
  categories:Category[]=[];
  sideCategories:SideCategory[]=[]
  underCategories:UnderCategory[]=[]
  underCategory:UnderCategory[]=[]
  products:Product[]=[]
  categoryId:number;
  sideCategoryId:number[]=[]
  closeIcon:string="https://localhost:44331/Uploads/Images/cancel-2.png";
  //strict özelligini devre dışı bırakıp interface yapısını kullandık.
  currentCategory:Category;
  constructor(private categoryService:CategoryService,private productService:ProductService,private activateRoute:ActivatedRoute){

  }
  ngOnInit(): void {
   this.getCategories();
   this.getAllUnderCategory();
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
      this.sideCategoryId=[]
      res.data.forEach(element => {
        this.sideCategoryId.push(element.sCategoryId)
        const underCategory=this.underCategories.filter(i=>this.sideCategoryId.includes(i.sideCategoryId));
        this.underCategory=underCategory
      });
    })
      this.categoryId=categoryId
  }
  getUnderCategory(sideCategoryId:number)
  {
    this.categoryService.getUnderCategory(sideCategoryId).subscribe(res=>{
      this.underCategories=res.data
    })
  }
  getAllUnderCategory()
  {
    this.categoryService.getAllUnderCategory().subscribe(res=>{
      this.underCategories=res.data

    })
  }
  addSideCategoryClass()
  {
    if(this.sideCategories.length>1)
    {
      return "side-category-cap"
    }
    return ""
  }
  removeCategoryClass()
  {
    this.sideCategories=[]
  }
  getSideCategoryForProduct(categoryId:number,sideCategoryId:number)
  {
    this.productService.getSideCategoryForProduct(categoryId,sideCategoryId).subscribe(res=>{
      this.products=res.data
    })
  }
  getCloseImage()
  {
      let url:string = "https://localhost:44331/Uploads/Images/cancel-1" ;
      return url;
  }
  getCloseImage2()
  {
    let url:string = "https://localhost:44331/Uploads/Images/cancel-2" ;
    return url;
  }
}
