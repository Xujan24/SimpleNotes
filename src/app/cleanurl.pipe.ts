import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanurl'
})
export class CleanurlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\s+/g, "-");
  }

}
