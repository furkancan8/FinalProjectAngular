import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/Product/orderDetails';
import { OrderdetailsService } from 'src/app/services/Product/orderdetails.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit{
  @ViewChild('productLink',{static:false}) productLink:ElementRef;
 localUserId=localStorage.getItem("i_u");
 userId=parseInt(this.localUserId);
 orders:OrderDetails[]=[]
 filterText:string="";
constructor(private orderService:OrderdetailsService,private router:Router) { }

ngOnInit(): void {
  this.getUserOrders();
}
  getUserOrders(){
    this.orderService.getUserOrder(this.userId).subscribe(sub=>{
      this.orders=sub.data
    })
  }
  submit()
  {
    const kelimeler=[this.filterText.split(' ').join('+')]
    this.productLink.nativeElement.click();
    this.router.navigate(['/product'], { queryParams: { src: JSON.stringify(kelimeler) } });
  }
}
