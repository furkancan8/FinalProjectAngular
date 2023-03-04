import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/Product/product.service';
import { AuthService } from 'src/app/services/User/auth.service';
import { ProductComponent } from '../../Products/product/product.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{
  @ViewChild('productLink',{static:false}) productLink:ElementRef;

  filterText:string="";
  IsActive:boolean=false;
  userId=localStorage.getItem("u_i");
  IsSearchEnter:boolean=false;
  //------------------ Icons
  defaultHeartFavorite:string="https://localhost:44331/Uploads/Images/heart-favorite-white.png";
  heartFavorite:string="https://localhost:44331/Uploads/Images/heart-favorite-";
  imgSource:string[]=[this.heartFavorite+"white.png",this.heartFavorite+"red.png"]
  heartIcon:string="https://localhost:44331/Uploads/Images/heart-icon.png";
  constructor(private authService:AuthService,private productService:ProductService,private router:Router) {

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
  changeImg(){
    console.log(this.defaultHeartFavorite)
    return this.defaultHeartFavorite=this.imgSource[1]
  }
  resetImg(){
    console.log(this.defaultHeartFavorite)
    return  this.defaultHeartFavorite=this.imgSource[0]
  }
  submit()
  {
    const kelimeler=[this.filterText.split(' ').join('+')]
    this.productLink.nativeElement.click();
    this.router.navigate(['/product'], { queryParams: { src: JSON.stringify(kelimeler) } });
  }
}
