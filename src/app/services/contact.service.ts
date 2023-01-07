import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl="https://localhost:44331/api/";
  constructor(private httpClient:HttpClient) { }
  getContact():Observable<ListResponseModel<Contact>>
  {
    let newPath=this.apiUrl+"contacts/getall"
    return this.httpClient.get<ListResponseModel<Contact>>(newPath);
  }

}
