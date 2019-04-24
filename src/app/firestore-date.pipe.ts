import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'firestoreDate'
})
export class FirestoreDatePipe implements PipeTransform {

  transform(value: any, format?: string): string {
    return formatDate(value.toDate(), format || 'medium', 'en-US');
  }

}
