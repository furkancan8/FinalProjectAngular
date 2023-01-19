import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderDetails } from '../models/orderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/orderdetails/";

  getall():Observable<ListResponseModel<OrderDetails>>
  {
    var newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<OrderDetails>>(newPath);
  }
  getUserOrder(userId:number):Observable<ListResponseModel<OrderDetails>>
  {
    var newPath=this.apiUrl+"getuserorders?userId="+userId;
    return this.httpClient.get<ListResponseModel<OrderDetails>>(newPath);
  }
}
