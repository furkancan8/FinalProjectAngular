import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Product/category';
import { Employee } from 'src/app/models/User/employee';
import { OpertaionClaim } from 'src/app/models/Admin/operationClaim';
import { Product } from 'src/app/models/Product/product';
import { User } from 'src/app/models/User/user';
import { AdminService } from 'src/app/services/User/admin.service';
import { CategoryService } from 'src/app/services/Product/category.service';
import { EmployeeService } from 'src/app/services/User/employee.service';
import { OperationclaimService } from 'src/app/services/User/operationclaim.service';
import { ProductService } from 'src/app/services/Product/product.service';
import { UserService } from 'src/app/services/User/user.service';

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
  operationClaim:OpertaionClaim[]=[]
  cliamAddForm:FormGroup;
  operationClaimId:number
 constructor(private productService:ProductService,private categoryService:CategoryService,private employeeService:EmployeeService,
  private userService:UserService,private formsBuilder:FormBuilder,private operationClaimService:OperationclaimService) {

 }
 ngOnInit(): void {
   this.getProducts();
   this.getCategory();
   this.getEmployee();
   this.getUser();
   this.createClaimAddForm();
   this.getOperationClaim();
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
 getOperationClaim(){
  this.operationClaimService.getOperationClaim().subscribe(res=>{
  this.operationClaim=res.data
  })
 }
 click(){
  console.log(this.cliamAddForm.value)
 }
 Number(opId:any){
  return parseInt(opId);
 }
}
