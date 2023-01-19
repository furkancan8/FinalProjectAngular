import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Employee } from 'src/app/models/employee';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { OperationclaimService } from 'src/app/services/operationclaim.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[ProductService,CategoryService,AdminService]
})
export class AdminComponent implements OnInit{
  products:Product[]=[]
  categories:Category[]=[]
  employee:Employee[]=[]
  user:User[]=[]
  cliamAddForm:FormGroup;
 constructor(private productService:ProductService,private categoryService:CategoryService,private employeeService:EmployeeService,
  private userService:UserService,private formsBuilder:FormBuilder) {

 }
 ngOnInit(): void {
   this.getProducts();
   this.getCategory();
   this.getEmployee();
   this.getUser();
   this.createClaimAddForm();
   console.log(this.cliamAddForm.value)
 }
 createClaimAddForm(){
  this.cliamAddForm=this.formsBuilder.group({
    userId:["",Validators.required],
    operationClaimId:["",Validators.required]
  })
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
 getEmployee(){
   this.employeeService.getall().subscribe(res=>{
    this.employee=res.data
   })
 }
 getUser()
 {
  this.userService.getAllUser().subscribe(res=>{
   this.user=res.data
  })
 }
}
