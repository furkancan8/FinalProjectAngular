import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../../models/User/city';
import { District } from '../../models/User/district';
import { ListResponseModel } from '../../models/listResponseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { User } from '../../models/User/user';
import { ResponseModel } from 'src/app/models/responseModel';

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
  getAllDistrict():Observable<ListResponseModel<District>>
  {
    var newPath=this.apiUrl+"getalldistrict";
    return this.httpClient.get<ListResponseModel<District>>(newPath)
  }
  update(user:User,id:number):Observable<ResponseModel>
  {
    var newPath=this.apiUrl+"update?id="+id;
    return this.httpClient.post<ResponseModel>(newPath,user)
  }
}
