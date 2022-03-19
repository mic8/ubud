import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
    public transform(value: string): any {
        return value.substring(0, 100) + '...';
    }
}
