import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ProductProperty } from 'src/app/models/Product/productProperty';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductPropertyService {

  apiUrl="https://localhost:44331/api/productproperty/";
  constructor(private httpClient:HttpClient) { }

  getProductById(productId:number):Observable<SingleResponseModel<ProductProperty>>
  {
    var newPath=this.apiUrl+"getproduct?id="+productId;
    return this.httpClient.get<SingleResponseModel<ProductProperty>>(newPath);
  }
}
