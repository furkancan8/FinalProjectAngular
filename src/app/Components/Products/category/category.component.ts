import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit{
  //html in kullanıcak oldugu data tutucular
  categories:Category[]=[];
  //strict özelligini devre dışı bırakıp interface yapısını kullandık.
  currentCategory:Category;
  constructor(private categoryService:CategoryService){

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
}
