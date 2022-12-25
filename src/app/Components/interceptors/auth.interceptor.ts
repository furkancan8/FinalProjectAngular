import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
//http isteklerimizi intercep(araya girme) edicek class
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //request=ürün bilgilerini post etmek//next:post olmadan ekleme yapar
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //localStorage içindeki token burda alır
    let token=localStorage.getItem("token");
    let newRequest:HttpRequest<any>;//kullanıcınun post etmesini newRequest e atar
    newRequest=request.clone({//newRequest'i set eder.
      headers:request.headers.set("Authorization","Bearer "+token)//bearer   boşluk önemli
    })//request'in klonunun new request'e atar
    return next.handle(newRequest);
  }
}

//error verdigi zaman burda kontrol edilebilir
