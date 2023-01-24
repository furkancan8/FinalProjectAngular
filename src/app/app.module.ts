import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './AngulurApp/app-routing.module';
import { AppComponent } from './AngulurApp/app.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { CategoryComponent } from './Components/Products/category/category.component';
import { NaviComponent } from './Components/Navbar/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CardSummaryComponent } from './Components/Navbar/card-summary/card-summary.component';
import { ProductAddComponent } from './Components/Admin/product-add/product-add.component';
import { LoginComponent } from './Components/User/login/login.component';
import { AuthInterceptor } from './Components/interceptors/auth.interceptor';
import { CountLimitPipe } from './pipes/count-limit.pipe';
import { ProductDetailComponent } from './Components/Products/product-detail/product-detail.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { UpdateEntityComponent } from './Components/Admin/update-entity/update-entity.component';
import { DeleteDirective } from './directive/delete.directive';
import { UpdateDirective } from './directive/update.directive';
import { AddDirective } from './directive/add.directive';
import { ContactComponent } from './Components/contact/contact.component';
import { BasketComponent } from './Components/Navbar/basket/basket.component';
import { UserInfoComponent } from './Components/User/user-info/user-info.component';
import { UserOrdersComponent } from './Components/User/user-orders/user-orders.component';
import { ProductSection1Component } from './Components/Products/product-section1/product-section1.component';
import { ProductSection2Component } from './Components/Products/product-section2/product-section2.component';

@NgModule({
  //kendi projemizdeki componentler
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CardSummaryComponent,
    ProductAddComponent,
    LoginComponent,
    CountLimitPipe,
    ProductDetailComponent,
    RegisterComponent,
    AdminComponent,
    UpdateEntityComponent,
    DeleteDirective,
    UpdateDirective,
    AddDirective,
    ContactComponent,
    BasketComponent,
    UserInfoComponent,
    UserOrdersComponent,
    ProductSection1Component,
    ProductSection2Component
  ],
  //dışardan aldıgımız moduller
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}//bütün servislere uygulanalır,global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
