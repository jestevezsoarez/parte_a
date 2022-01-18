import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {

  transform(value: string, tipo: string): string {

    var regex = /(\d+)/g;

    let str = value.match(regex);
    let numero = parseInt(str[0]);
    
    if( tipo == 'provider') {
      return `Module ${ numero } `;
    } 
    else if ( tipo == 'user') {
      return `User ${ numero }`;
    }    
    
  }

}
