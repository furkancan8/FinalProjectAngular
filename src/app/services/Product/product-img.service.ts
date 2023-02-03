import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ProductImg } from 'src/app/models/Product/productImg';

@Injectable({
  providedIn: 'root'
})
export class ProductImgService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/";

  getProductImages(productId:number): Observable<ListResponseModel<ProductImg>>{
    let newPath = this.apiUrl+"productimg/getproductimgbyid?productId="+productId;
    return this.httpClient.get<ListResponseModel<ProductImg>>(newPath);
  }
  getAllProductImages(): Observable<ListResponseModel<ProductImg>>{
    let newPath = this.apiUrl+"productimg/getall";
    return this.httpClient.get<ListResponseModel<ProductImg>>(newPath);
  }
}
