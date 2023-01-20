import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../models/User/city';
import { District } from '../../models/User/district';
import { ListResponseModel } from '../../models/listResponseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { User } from '../../models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/user/";
  getAllUser():Observable<ListResponseModel<User>>
  {
    let newPath=this.apiUrl+"getalluser";
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }
  getUser(email:string):Observable<SingleResponseModel<User>>
  {
    let newPath=this.apiUrl+"getuser?userMail="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  getbyId(userId:number):Observable<SingleResponseModel<User>>
  {
    var newPath=this.apiUrl+"getbyiduser?userId="+userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  getAllCity():Observable<ListResponseModel<City>>
  {
   var newPath=this.apiUrl+"getallcity";
   return this.httpClient.get<ListResponseModel<City>>(newPath)
  }
  getCityofDistrict(cityId:number):Observable<ListResponseModel<District>>
  {
    var newPath=this.apiUrl+"getdistrictofcity?cityId="+cityId;
    return this.httpClient.get<ListResponseModel<District>>(newPath)
  }
  getAllFavoriteUser(userId:number)
  {
   var newPath=this.apiUrl+"getbyuserid?userId="+userId;
   return this.httpClient.get(newPath);
  }
}
