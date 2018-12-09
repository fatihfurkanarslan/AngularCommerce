import { Pipe, PipeTransform } from '@angular/core';
import{Product} from "./product"
import { filter } from 'rxjs/operators';


@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {


  transform(value: Product[], filterText?: string): Product[] {

    filterText = filterText?filterText.toLocaleLowerCase():null;

    if(filterText){
      return value.filter((p:Product) => p.productName.toLocaleLowerCase().indexOf(filterText) != -1);
    }
    else{
      return value;
    }

  }

}
