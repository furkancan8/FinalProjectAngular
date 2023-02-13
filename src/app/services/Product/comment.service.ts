import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Comment } from '../../models/Product/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/comment/";
  getProductOfComment(productId:number):Observable<ListResponseModel<Comment>>
  {
    var newPath=this.apiUrl+"getproductcomment?productId="+productId;
    return this.httpClient.get<ListResponseModel<Comment>>(newPath)
  }
  getUserOfComment(userId:number):Observable<ListResponseModel<Comment>>
  {
    var newPath=this.apiUrl+"getusercomment?userId="+userId;
    return this.httpClient.get<ListResponseModel<Comment>>(newPath)
  }
}
