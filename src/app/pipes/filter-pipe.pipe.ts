import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    // input degerini küçültür
    filterText=filterText?filterText.toLocaleLowerCase():null
    //filter.((p:Product))c# daki linq işlemi yapar
    //indexOf:var mı? demek
    //kullanıcıdan alınan degeri küçültür
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
