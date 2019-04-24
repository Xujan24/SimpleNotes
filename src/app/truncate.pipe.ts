/*

source: How to create an Angular2 Pipe? ( Link: https://youknowriad.github.io/angular2-cookbooks/pipe.html)

*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, Limit: number): any {
    let limit = Limit;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
