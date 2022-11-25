import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortproduct'
})
export class SortproductPipe implements PipeTransform {

  transform(values: {id:string,name:string,price:string}[]): {id:string,name:string,price:string}[] {
    let tempValues=values.slice();
    tempValues.sort((p1,p2)=>{
      return parseInt(p1.price,10) - parseInt(p2.price,10);
    });
    return tempValues;
  }

}
