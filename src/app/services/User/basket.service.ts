import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { Basket } from 'src/app/models/User/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrl="https://localhost:44331/api/basket/";
  constructor(private httpClient:HttpClient) { }
  addBasket(basket:Basket):Observable<ResponseModel>
  {
    var newPath=this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,basket)
  }
  deleteBasket(basketId:number):Observable<ResponseModel>
  {
    var newPath=this.apiUrl+"delete?basketId="+basketId;
    return this.httpClient.delete<ResponseModel>(newPath)
  }
  getallUserBasket(userId:number):Observable<ListResponseModel<Basket>>
  {
    var newPath=this.apiUrl+"getalluserbasket?userId="+userId;
    return this.httpClient.get<ListResponseModel<Basket>>(newPath);
  }
}
