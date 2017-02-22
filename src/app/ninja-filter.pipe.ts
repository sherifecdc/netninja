import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ninjaFilter'
})
export class NinjaFilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {

    //If term is undefined
    if(term === undefined) return ninjas;

    return ninjas.filter(function(ninja){
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    });
    
  }
}
