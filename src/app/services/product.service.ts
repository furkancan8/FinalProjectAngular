import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44331/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    //js class mantıgı yok onun yerine metotlar var.this burdaki class a ait oldugun gösterir
    //gelen data'yı PRM map edicek
    //response yanıt demek içine de yanıt geldigi zaman yapılacaklar yazılır
    //app.module import httoclientModel import edilmesi gerekiyor
    let newPath=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  // metodun çalışması için geçerli token ile başvuru yapılmalı
  add(product:Product):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
  getProductDetails(productId:number):Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getbyId?id="+productId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
