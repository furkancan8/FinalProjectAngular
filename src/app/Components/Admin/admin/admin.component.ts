import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[ProductService,CategoryService,AdminService]
})
export class AdminComponent implements OnInit{
  products:Product[]=[]
  categories:Category[]=[]
 constructor(private productService:ProductService,private categoryService:CategoryService) {

 }
 ngOnInit(): void {
   this.getProducts();
   this.getCategory();
 }

 getProducts()
 {
  this.productService.getProducts().subscribe(response=>{
    this.products=response.data
  })
 }
 getCategory()
 {
  this.categoryService.getCategories().subscribe(response=>{
    this.categories=response.data
  })
 }
}
