import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate', // nama pipe sama seperti selector cuman ini lebih ke nama (camelCase)
})
export class TruncatePipe implements PipeTransform {
    public transform(value: string): any {
        return (value.length > 100) ? value.substr(0,99) + '...' : value;
    }
}
