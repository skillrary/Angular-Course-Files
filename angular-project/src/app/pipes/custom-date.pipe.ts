import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const month = value.getMonth();
    
    const monthName = [
      'जनवरी',
      'फरवरी',
      'मार्च',
      'अप्रैल',
      'मई',
      'जून',
      'जुलाई',
      'अगस्त',
      'सितम्बर',
      'अक्टूबर',
      'नवम्बर',
      'दिसम्बर'
    ];

    return value.getDate() + ' ' + monthName[month] + ' ' + value.getFullYear();
  }

}
