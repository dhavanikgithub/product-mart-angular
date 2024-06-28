import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, decimals: number = 2): number {
    if (!value) return value;

    // Calculate rounded value
    const factor = Math.pow(10, decimals);
    return Math.ceil(value * factor) / factor;
  }

}
