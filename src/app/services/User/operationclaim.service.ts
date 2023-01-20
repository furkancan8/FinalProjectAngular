import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { OpertaionClaim } from '../../models/Admin/operationClaim';
import { ResponseModel } from '../../models/responseModel';
import { UserOperationClaim } from '../../models/Admin/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class OperationclaimService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44331/api/userclaim/";

  cliamAdd(userOperationClaim:UserOperationClaim):Observable<ResponseModel>
  {
    var newPath=this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,userOperationClaim)
  }
  getOperationClaim():Observable<ListResponseModel<OpertaionClaim>>
  {
    var newPath=this.apiUrl+"getalloperationclaim";
    return this.httpClient.get<ListResponseModel<OpertaionClaim>>(newPath);
  }
}
