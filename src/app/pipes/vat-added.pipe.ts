import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//value degiştirilecek olan deger,:'den sonra dönüş tipi,rate ise parametreler
  transform(value: number, rate:number): number {
    return value + (value*10/100);
  }

}
