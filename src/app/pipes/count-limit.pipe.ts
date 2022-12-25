import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countLimit'
})
export class CountLimitPipe implements PipeTransform {

  transform(value: number): number {
    if(value>0){
      return value=0;
    }else{return value}
  }

}
