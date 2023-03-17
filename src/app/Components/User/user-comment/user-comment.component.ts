import { Component,OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Product/comment';
import { Product } from 'src/app/models/Product/product';
import { CommentService } from 'src/app/services/Product/comment.service';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit{
  userComment:Comment[]=[]
  id=localStorage.getItem("i_u")
  userId=parseInt(this.id);
  product:Product[]=[]
  products:Product[]=[]
  freeCargo:string="https://localhost:44331/Uploads/Images/kargo-bedava.png"
  fastCargo:string="https://localhost:44331/Uploads/Images/hızlı-kargo.png"
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  deleteIcon:string="https://localhost:44331/Uploads/Images/delete.png";
  constructor(private commentService:CommentService,private productService:ProductService) {

  }
  ngOnInit(): void {
    this.getUserComment(this.userId)
  }
  getUserComment(userId:number)
  {
    this.commentService.getUserOfComment(userId).subscribe(res=>{
     this.userComment=res.data
     res.data.forEach(c => {
      this.getProductDetails(c.productId);
     });
    })
  }
  getProductDetails(productId:number)
  {
    this.productService.getProductDetails(productId).subscribe(res=>{
      this.product.push(res.data)
    })
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
    return url;
  }
}
