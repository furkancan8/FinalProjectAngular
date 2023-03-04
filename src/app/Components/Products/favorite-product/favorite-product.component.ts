import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product/product';
import { Favorite } from 'src/app/models/User/favorite';
import { ProductService } from 'src/app/services/Product/product.service';
import { FavoriteService } from 'src/app/services/User/favorite.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})
export class FavoriteProductComponent implements OnInit{
  filterText:string="";
  userFavoriteProduct:Product[]=[]
  userFavorite:Favorite[]=[]
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  heartFavoriteIcon:string="https://localhost:44331/Uploads/Images/heart-favorite-red.png";
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  constructor(private favoriteService:FavoriteService,private productService:ProductService) {

  }
  ngOnInit(): void {
   this.getUserFavoriteById(3)
  }
  getUserFavoriteById(userId:number)
  {
    this.favoriteService.getAllFavoriteUser(userId).subscribe(res=>{
      this.userFavorite=res.data
     res.data.forEach(element => {
        this.productService.getProductDetails(element.productId).subscribe(res=>{
          this.userFavoriteProduct.push(res.data)
        })
     });
    })
  }
  getProductDetails(product:number){
    this.productService.getProductDetails(product);
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
    return url;
  }
  deleteFavoriteProduct(id:number)
  {
    this.userFavorite.forEach(element => {
      if(element.productId==id)
      {
        this.favoriteService.deleteFavoriteUser(element.id).subscribe(res=>{
          console.log(res.message)
        })
      }
    });
   const deleteProductIndex=this.userFavoriteProduct.findIndex(i=>i.productId==id)//metodu araştır
    this.userFavoriteProduct.splice(deleteProductIndex,1);//metodu iyice araştır ögren,slice da dahil
  }
  IsProductDiscount(product:Product)
  {
    if(product.discount>0)
    {
      return "line-tag"
    }
    return ""
  }
}

