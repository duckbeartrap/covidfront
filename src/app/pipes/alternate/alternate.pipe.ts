import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternate'
})
export class AlternatePipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value || 'N/A';
  }

}
