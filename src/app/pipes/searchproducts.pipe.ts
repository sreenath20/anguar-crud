import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchproducts'
})
export class SearchproductsPipe implements PipeTransform {

  transform(items: any[], query?: any): any[] {
    
    if(!items)return [];
    if(!query)return items;

    return items.filter(
      (item)=>{
        return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
      }
    );
  }

}
