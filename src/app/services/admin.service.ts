import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable()
export class AdminService{
  apiUrl="https://localhost:44331/api/";
  constructor(private httpClient:HttpClient) { }

  updateProduct(productId:number,product:Product):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"products/update?id="+productId;
    return this.httpClient.post<ResponseModel>(newPath,product);
  }
  deleteProduct(productId:number):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"products/delete?id="+productId;
    return this.httpClient.delete<ResponseModel>(newPath);
  }
  addProduct(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
 }
}
