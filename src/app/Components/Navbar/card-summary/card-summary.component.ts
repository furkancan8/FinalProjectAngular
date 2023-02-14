import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/Product/cartItem';
import { Product } from 'src/app/models/Product/product';
import { CardService } from 'src/app/services/Product/card.service';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'],
  providers:[CardService]
})
export class CardSummaryComponent implements OnInit{
   cardItems:CartItem[]=[];
  constructor(private cartService:CardService) {

  }
  ngOnInit(): void {
    this.getCart()
    console.log(this.cardItems)
  }
  getCart(){
    this.cardItems=this.cartService.list()
  }
  removeFromCart(product:Product)
  {
     this.cartService.removeFromCard(product);
  }
}
