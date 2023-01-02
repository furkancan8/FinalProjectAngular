import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/Products/product/product.component';
import { CategoryComponent } from './Components/Products/category/category.component';
import { NaviComponent } from './Components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CardSummaryComponent } from './Components/card-summary/card-summary.component';
import { ProductAddComponent } from './Components/Products/product-add/product-add.component';
import { LoginComponent } from './Components/User/login/login.component';
import { AuthInterceptor } from './Components/interceptors/auth.interceptor';
import { CountLimitPipe } from './pipes/count-limit.pipe';
import { ProductDetailComponent } from './Components/Products/product-detail/product-detail.component';
import { RegisterComponent } from './Components/User/register/register.component';

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
  ],
  //dışardan aldıgımız moduller
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })//projede kullanılabilir hale getir demek
  ],
  providers: [
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}//bütün servislere uygulanalır,global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
