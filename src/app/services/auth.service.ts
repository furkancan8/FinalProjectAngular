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
