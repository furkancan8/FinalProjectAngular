import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Product/order';
import { Product } from 'src/app/models/Product/product';
import { OrderService } from 'src/app/services/Product/order.service';
import { ProductService } from 'src/app/services/Product/product.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit{
  @ViewChild('productLink',{static:false}) productLink:ElementRef;
 localUserId=localStorage.getItem("i_u");
 userId=parseInt(this.localUserId);
 orders:Order[]=[]
 products:Product[]=[]
 productIds:number[]=[]
 userName:string;
 filterText:string="";
 imageUrl:string="https://localhost:44331/Uploads/Images/";
 count:number=0
constructor(private orderService:OrderService,private productService:ProductService,private router:Router,
private userService:UserService) { }

ngOnInit(): void {
  this.getUserOrders();
  this.getUserName(this.userId)
}
  getUserOrders(){
    this.orderService.getUserOrder(this.userId).subscribe(order=>{
      this.orders=order.data
      order.data.forEach(element => {
          this.getProduct(element.productId);
      });
    })
  }
  submit()
  {
    const kelimeler=[this.filterText.split(' ').join('+')]
    this.productLink.nativeElement.click();
    this.router.navigate(['/product'], { queryParams: { src: JSON.stringify(kelimeler) } });
  }
  getProduct(productId:number)
  {
    this.productService.getProductDetails(productId).subscribe(sub=>{
      this.products.push(sub.data)
      console.log(this.products)
    })
  }
  getUserName(userId:number)
  {
    this.userService.getbyId(userId).subscribe(res=>{
      this.userName=res.data.firstName
    })
  }
  getImageSource(productImage:string):string{
    let url:string = "https://localhost:44331/Uploads/Images/" + productImage;
    return url;
  }
}
