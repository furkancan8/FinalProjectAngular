import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Product } from '../../models/Product/product';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { Brand } from 'src/app/models/Product/brand';


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
  getSideCategoryForProduct(categoryId:number,sideCategoryId:number):Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getsidecategoryforproduct?categoryId="+categoryId+"&sideCategoryId="+sideCategoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductDetails(productId:number):Observable<SingleResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getbyId?id="+productId;
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
  getPopProductFirstTen():Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getpopcategoryfirst";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getCategoryInPopulerProduct(categoryId:number):Observable<SingleResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getcategoryinpopulerproduct?categoryId="+categoryId;
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
  getAllProductForName(searchName:string):Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getallproductforname?searchName="+searchName;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getVeryReviewsProduct():Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getveryreviewsproduct";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getByIdBrand(brandId:number):Observable<ListResponseModel<Brand>>
  {
    let newPath=this.apiUrl+"brand/getallbrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
