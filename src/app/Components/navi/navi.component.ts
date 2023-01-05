import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductComponent } from '../Products/product/product.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{
  filterText="";
  IsActive:boolean=false;
  constructor(private authService:AuthService) {

   }
  ngOnInit(): void {
    this.IsUser()
    console.log("navbar çalıştı");
    //  if(this.authService.isAuthenticate()){
    //    this.IsActive=this.authService.IsActivee();
    //   }else{
    //    this.IsActive=false;
    //   }
  }
  IsUser(){
    if(this.authService.isAuthenticate()){
       console.log("Giriş ");
       this.IsActive=true;
    }
  }
}
