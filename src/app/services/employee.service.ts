import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/employee/";

  getall():Observable<ListResponseModel<Employee>>
  {
    var newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Employee>>(newPath);
  }
  getbyid(employeeId:number):Observable<ListResponseModel<Employee>>
  {
    var newPath=this.apiUrl+"getbyid?employeeId="+employeeId;
    return this.httpClient.get<ListResponseModel<Employee>>(newPath);
  }
}
