import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'excerpt',
})
export class ExcerptPipe implements PipeTransform {
    public transform(value: string, len = 100): any {
        if (value.length <= len) return value;
      
        return `${value.slice(0, len)} ...`
    }
}
