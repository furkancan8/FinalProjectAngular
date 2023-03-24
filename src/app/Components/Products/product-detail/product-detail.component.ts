import { ArrayType } from '@angular/compiler';
import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toArray } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Product } from 'src/app/models/Product/product';
import { Comment } from 'src/app/models/Product/comment';
import { CommentService } from 'src/app/services/Product/comment.service';
import { ProductService } from 'src/app/services/Product/product.service';
import { ProductImgService } from 'src/app/services/Product/product-img.service';
import { ProductImg } from 'src/app/models/Product/productImg';
import { Brand } from 'src/app/models/Product/brand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/User/user.service';
import { User } from 'src/app/models/User/user';
import { ProductPropertyService } from 'src/app/services/Product/product-property.service';
import { ProductProperty } from 'src/app/models/Product/productProperty';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ProductService]
})
export class ProductDetailComponent implements OnInit{
  id=localStorage.getItem("i_u");
  userId=parseInt(this.id);
  userName:string
  products:Product[]=[]
  productProperty:ProductProperty[]=[]
  productImg:ProductImg[]=[]
  mainProductImg:string;
  productComment:Comment[]=[]
  productOfBrand:Brand[]=[]
  productId:number;
  productid:number;
  productBasketCount:number=1;
  basketAddForm:FormGroup
  imageUrl:string="https://localhost:44331/Uploads/Images/";
  likeUrl:string="https://localhost:44331/Uploads/Images/like.png";
  constructor(private route:ActivatedRoute,private productservice:ProductService,private commentService:CommentService,
    private productImgService:ProductImgService,private formBuilder:FormBuilder,private userService:UserService,
    private productProprtyService:ProductPropertyService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.getProductDetails(params["productId"])
      this.getProductOfComment(params["productId"])
      this.getProductImage(params["productId"])
      this.mainImage(params["productId"])
      this.getProductPropert(params["productId"])
    })
    this.getUserById();
    this.createBasketAddForm()
  }
  getUserById()
  {
    this.userService.getbyId(this.userId).subscribe(res=>{
     this.userName=res.data.firstName
    })
  }
  getProductDetails(productId:number){
    this.productservice.getProductDetails(productId).subscribe(response=>{
      this.products.push(response.data)
      this.getProductOfBrand(response.data.brandId)
    })
  }
  getProductOfComment(productId:number)
  {
    this.commentService.getProductOfComment(productId).subscribe(res=>{
      this.productComment=res.data
    })
  }
  getStartImage(startValue:number){
    let url:string = "https://localhost:44331/Uploads/Images/star-"+startValue+".png" ;
    return url;
  }
  getProductImage(productId:number)
  {
    this.productImgService.getProductImages(productId).subscribe(res=>{
      this.productImg=res.data
    })
  }
  getProductId(productId:number)
  {
    this.productid=productId;
  }
  getImageSource(productImage:string):string{
    let url:string = "https://localhost:44331/Uploads/Images/" + productImage;
    return url;
  }
  getProductOfBrand(brandId:number)
  {
    this.productservice.getByIdBrand(brandId).subscribe(res=>{
      this.productOfBrand=res.data
    })
  }
  upCount(){
      this.productBasketCount+=1
  }
  downCount(){
    if(this.productBasketCount!>1)
    {
      this.productBasketCount-=1
    }
  }
  createBasketAddForm(){
    this.basketAddForm=this.formBuilder.group({
    userId:[this.userId,Validators.required],
    productId:[this.productid,[Validators.required, Validators.pattern('^[0-9]+$')]],
   })
   this.basketAddForm.get('productId').setValue(this.productid);
  }
  changeMainImage(image:string)
  {
    this.mainProductImg=image
  }
  mainImage(productId:number)
  {
    this.productservice.getProductDetails(productId).subscribe(res=>{
      this.mainProductImg=this.imageUrl+res.data.imagePath;
    })
  }
  getProductPropert(productId:number)
  {
    this.productProprtyService.getProductById(productId).subscribe(res=>{
        this.productProperty.push(res.data)
    })
  }
}
