import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Favorite } from 'src/app/models/User/favorite';
import { ResponseModel } from 'src/app/models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/favorite/";

  getAllFavoriteUser(userId:number):Observable<ListResponseModel<Favorite>>
  {
   var newPath=this.apiUrl+"getbyuserid?userId="+userId;
   return this.httpClient.get<ListResponseModel<Favorite>>(newPath);
  }
  deleteFavoriteUser(userId:number):Observable<ResponseModel>
  {
   var newPath=this.apiUrl+"delete?userId="+userId;
   return this.httpClient.delete<ResponseModel>(newPath);
  }
  addUserFavorite(favorite:Favorite):Observable<ResponseModel>
  {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",favorite)
  }
}
