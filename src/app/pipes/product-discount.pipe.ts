import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product/product';

@Pipe({
  name: 'discount'
})
export class ProductDiscountPipe implements PipeTransform {

  transform(productPrice: number,discount:number): number {
    if (!productPrice) return null;

    const discountedPrice = productPrice - (productPrice * (discount / 100));
    return Math.round(discountedPrice * 100) / 100;
  }

}
