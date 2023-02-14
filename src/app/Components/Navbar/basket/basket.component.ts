import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'src/app/models/Product/cartItem';
import { Product } from 'src/app/models/Product/product';
import { Basket } from 'src/app/models/User/basket';
import { CardService } from 'src/app/services/Product/card.service';
import { BasketService } from 'src/app/services/User/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{

 constructor(private basketService:BasketService) {
   //veritabanı tarafında sepet yap
 }
 ngOnInit(): void {

 }
}
