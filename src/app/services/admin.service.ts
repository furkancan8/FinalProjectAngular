import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable()
export class AdminService {
  apiUrl="https://localhost:44331/api/";
  constructor(private httpClient:HttpClient) { }

  updateProduct(product:Product):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/update",product.productId);
  }
}
