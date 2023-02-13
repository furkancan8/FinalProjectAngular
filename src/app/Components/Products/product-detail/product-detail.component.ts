import { ArrayType } from '@angular/compiler';
import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/Product/product';
import { Comment } from 'src/app/models/Product/comment';
import { CommentService } from 'src/app/services/Product/comment.service';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ProductService]
})
export class ProductDetailComponent implements OnInit{
  products:Product[]=[]
  productComment:Comment[]=[]
  productId:number
  constructor(private route:ActivatedRoute,private productservice:ProductService,private commentService:CommentService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.getProductDetails(params["productId"])
      this.getProductOfComment(params["productId"])
    })
  }

  getProductDetails(productId:number){
    this.productservice.getProductDetails(productId).subscribe(response=>{
      this.products.push(response.data)
    })
  }
  getProductOfComment(productId:number)
  {
    this.commentService.getProductOfComment(productId).subscribe(res=>{
      this.productComment=res.data
    })
  }
}
