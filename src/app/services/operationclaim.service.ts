import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { UserOperationClaim } from '../models/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class OperationclaimService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/userclaim/";

  cliamAdd(operationClaim:UserOperationClaim):Observable<ResponseModel>
  {
    var newPath=this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,operationClaim)
  }
}
