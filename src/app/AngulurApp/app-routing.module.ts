import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Components/User/login/login.component';
import { ProductAddComponent } from '../Components/Admin/product-add/product-add.component';
import { ProductDetailComponent } from '../Components/Products/product-detail/product-detail.component';
import { ProductComponent } from '../Components/Products/product/product.component';
import { RegisterComponent } from '../Components/User/register/register.component';
import { LoginGuard } from '../guards/login.guard';
import { NaviComponent } from '../Components/Navbar/navi/navi.component';
import { AdminComponent } from '../Components/Admin/admin/admin.component';
import { UpdateEntityComponent } from '../Components/Admin/update-entity/update-entity.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { UserInfoComponent } from '../Components/User/user-info/user-info.component';
import { UserOrdersComponent } from '../Components/User/user-orders/user-orders.component';
import { UserCommentComponent } from '../Components/User/user-comment/user-comment.component';
import { BasketComponent } from '../Components/Navbar/basket/basket.component';
import { CategoryPageComponent } from '../Components/Products/category-page/category-page.component';
import { FavoriteProductComponent } from '../Components/Products/favorite-product/favorite-product.component';
import { ProductPageComponent } from '../Components/Products/product-page/product-page.component';
import { UserMessagesComponent } from '../Components/User/user-messages/user-messages.component';
//dizideki routler tanımlanır
const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//pathmatch=anasayfa için verilir
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"products/:productId",component:ProductDetailComponent},//böyle bir route oluşursa detailcomponent çalışır
  {path:"products/category/:categoryId",component:CategoryPageComponent},//categoryId back-and den gelen parametre ile aynı isme sahip olmalı
  {path:"products/category/:categoryId/:sCategoryId",component:CategoryPageComponent},//categoryId back-and den gelen parametre ile aynı isme sahip olmalı
  {path:"products",component:ProductComponent},
  {path:"product",component:ProductPageComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent},
  {path:"delete/product/:productId",component:AdminComponent},
  {path:"update/:productId",component:UpdateEntityComponent},
  {path:"update/:categoryId",component:UpdateEntityComponent},
  {path:"basket",component:BasketComponent},
  {path:"delete/basket/:basketId",component:BasketComponent},
  {path:"userInfo",component:UserInfoComponent},
  {path:"userOrder",component:UserOrdersComponent},
  {path:"userComment",component:UserCommentComponent},
  {path:"userFavorite",component:FavoriteProductComponent},
  {path:"userMessage",component:UserMessagesComponent},

];
//projeye dahil edilir
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
