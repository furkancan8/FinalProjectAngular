import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44331/api/auth/";
  constructor(private httpClient:HttpClient) {}

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)

  }
  register(registerModel:RegisterModel)
  {
     return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }
  getUser(email:string):Observable<SingleResponseModel<User>>
  {
    let newPath=this.apiUrl+"getuser?userMail="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  getbyId(userId:number):Observable<SingleResponseModel<User>>
  {
    var newPath=this.apiUrl+"getbyid?userId="+userId;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  isAuthenticate(){
    //sayfa yenilendiginide token bilgisi kaybolmasın diye tarayıcıda tutulucak
    if(localStorage.getItem("token")){
     return true;
    }
    else{
      return false;
    }
  }
  isUser(){
    //sayfa yenilendiginide token bilgisi kaybolmasın diye tarayıcıda tutulucak
    if(localStorage.getItem("i_u")){
     return true;
    }
    else{
      return false;
    }
  }
}
