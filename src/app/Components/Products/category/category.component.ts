import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Product/category';
import { SideCategory } from 'src/app/models/Product/sideCateogry';
import { CategoryService } from 'src/app/services/Product/category.service';

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
  //strict özelligini devre dışı bırakıp interface yapısını kullandık.
  currentCategory:Category;
  constructor(private categoryService:CategoryService){

  }
  ngOnInit(): void {
   this.getCategories();
  //  this.getSideCategory(2);
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
  }
}
