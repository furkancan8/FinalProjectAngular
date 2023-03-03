import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{


  constructor(private productService:ProductService) {

  }
  ngOnInit(): void {

  }
}
