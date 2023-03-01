import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import { Category } from '../../models/Product/category';
import { SideCategory } from '../../models/Product/sideCateogry';
import { UnderCategory } from 'src/app/models/Product/underCategory';
import { CategoryBrand } from 'src/app/models/Product/categoryBrand';
import { Brand } from 'src/app/models/Product/brand';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44331/api/categories/";
  apiUrl2="https://localhost:44331/api/sidecategory/";
  apiUrl3="https://localhost:44331/api/undercategory/";
  apiUrl4="https://localhost:44331/api/categorybrand/";
  apiUrl5="https://localhost:44331/api/brand/";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{

    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+"getall");
  }
  getSideCategory(categoryId:number):Observable<ListResponseModel<SideCategory>>
  {
    var newPath=this.apiUrl2+"getsidecategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<SideCategory>>(newPath);
  }
  getUnderCategory(sideCategoryId:number):Observable<ListResponseModel<UnderCategory>>
  {
    var newPath=this.apiUrl3+"getundercategory?sideCategoryId="+sideCategoryId;
    return this.httpClient.get<ListResponseModel<UnderCategory>>(newPath);
  }
  getAllUnderCategory():Observable<ListResponseModel<UnderCategory>>
  {
    var newPath=this.apiUrl3+"getall";
    return this.httpClient.get<ListResponseModel<UnderCategory>>(newPath);
  }
  getCategoryInBrand(categoryId:number):Observable<ListResponseModel<CategoryBrand>>
  {
    var newPath=this.apiUrl4+"getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<CategoryBrand>>(newPath);
  }
  getSideCategoryInBrand(sideCategoryId:number):Observable<ListResponseModel<CategoryBrand>>
  {
    var newPath=this.apiUrl4+"getbysidecategory?sideCategoryId="+sideCategoryId;
    return this.httpClient.get<ListResponseModel<CategoryBrand>>(newPath);
  }
  getByBrandId(brandId:number):Observable<ListResponseModel<Brand>>
  {
    var newPath=this.apiUrl5+"getallbarndid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
