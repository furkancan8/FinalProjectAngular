import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Category } from '../../models/Product/category';
import { SideCategory } from '../../models/Product/sideCateogry';


@Injectable()
export class CategoryService {
  apiUrl="https://localhost:44331/api/categories/";
  apiUrl2="https://localhost:44331/api/sidecategory/";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{

    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+"getall");
  }
  getSideCategory(categoryId:number):Observable<ListResponseModel<SideCategory>>
  {
    var newPath=this.apiUrl2+"getsidecategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<SideCategory>>(newPath);
  }
}
