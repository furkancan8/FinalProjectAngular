import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/User/login/login.component';
import { ProductAddComponent } from './Components/Products/product-add/product-add.component';
import { ProductDetailComponent } from './Components/Products/product-detail/product-detail.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { NaviComponent } from './Components/navi/navi.component';
//dizideki routler tanımlanır
const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//pathmatch=anasayfa için verilir
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"products/:productId",component:ProductDetailComponent},//böyle bir route oluşursa detailcomponent çalışır
  {path:"products/category/:categoryId",component:ProductComponent},//categoryId back-and den gelen parametre ile aynı isme sahip olmalı
  {path:"products",component:ProductComponent},
  {path:"products",component:NaviComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];
//projeye dahil edilir
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
