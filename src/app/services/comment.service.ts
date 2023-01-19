import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/comment/";
  getProductOfComment(productId:Number):Observable<ListResponseModel<Comment>>
  {
    var newPath=this.apiUrl+"getbyproductid?productId="+productId;
    return this.httpClient.get<ListResponseModel<Comment>>(newPath)
  }
}
