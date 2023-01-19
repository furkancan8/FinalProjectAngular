import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/orderDetails';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit{
 localUserId=localStorage.getItem("i_u");
 userId=parseInt(this.localUserId);
 orders:OrderDetails[]=[]
constructor(private orderService:OrderdetailsService) { }

ngOnInit(): void {
  this.getUserOrders();
}
  getUserOrders(){
    this.orderService.getUserOrder(this.userId).subscribe(sub=>{
      this.orders=sub.data
    })
  }
}
