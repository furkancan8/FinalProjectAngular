import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/User/auth.service';
import { ProductComponent } from '../../Products/product/product.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{
  filterText="";
  IsActive:boolean=false;
  userId=localStorage.getItem("u_i");
  constructor(private authService:AuthService) {

   }
  ngOnInit(): void {
    this.IsUser()
  }
  IsUser(){
    if(this.authService.isAuthenticate()){
       this.IsActive=true;
    }
  }
  ExitUser()
  {
    if(this.authService.isAuthenticate()){
       localStorage.removeItem("token");
       window.location.replace('http://localhost:4200/products')
   }
  }
}
