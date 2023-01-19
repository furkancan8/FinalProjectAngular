import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl="https://localhost:44331/api/contacts/";
  constructor(private httpClient:HttpClient) { }
  getContact():Observable<ListResponseModel<Contact>>
  {
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Contact>>(newPath);
  }
  addContact(contact:Contact):Observable<ResponseModel>
  {
   let newPath=this.apiUrl+"add";
   return this.httpClient.post<ResponseModel>(newPath,contact)
  }
}
