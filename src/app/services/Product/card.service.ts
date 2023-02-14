import { Injectable } from '@angular/core';
import { Product } from '../../models/Product/product';
import { CartItems } from '../../models/Product/cartItems';
import { CartItem } from '../../models/Product/cartItem';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  addToCard(product:Product){
    let item=CartItems.find(s=>s.product.productId==product.productId);
    if(item){//item varsa demek
      item.quantity+=1;
    }else{
      let cardItem=new CartItem();
      cardItem.product=product;
      cardItem.quantity=1;
      CartItems.push(cardItem)
    }
  }
  removeFromCard(product:Product){
    let item=CartItems.find(s=>s.product.categoryId==product.categoryId);
    CartItems.splice(CartItems.indexOf(item),1);
  }
  addToBasket(product:Product)
  {
      let cardItem=new CartItem();
      cardItem.product=product;
      cardItem.quantity+=1;
      CartItems.push(cardItem)
  }
  list()
  {
    return CartItems;
  }
}
