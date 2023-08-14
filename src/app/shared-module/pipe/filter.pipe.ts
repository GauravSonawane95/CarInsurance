import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, items: string): any {
     
    if(!value){
      return[]
    }
    
    if(items){
      value=value.filter((el:any)=>el["Fuel Type"]==items);
      return value;
    }else{
      return value;
    }
    
  }
}