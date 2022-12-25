import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css']
})
export class CardSummaryComponent implements OnInit{
   cardItems:CartItem[]=[];
  constructor(private cartService:CardService,private toaster:ToastrService) {

  }
  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this.cardItems=this.cartService.list()
  }
  removeFromCart(product:Product)
  {
     this.cartService.removeFromCard(product);
  }
}
