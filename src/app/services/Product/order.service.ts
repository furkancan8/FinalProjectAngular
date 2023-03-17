import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Order } from '../../models/Product/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/order/";

  getall():Observable<ListResponseModel<Order>>
  {
    var newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }
  getUserOrder(userId:number):Observable<ListResponseModel<Order>>
  {
    var newPath=this.apiUrl+"getuserorders?userId="+userId;
    return this.httpClient.get<ListResponseModel<Order>>(newPath);
  }
}
