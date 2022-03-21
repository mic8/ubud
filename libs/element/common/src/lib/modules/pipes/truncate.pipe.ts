import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate', // nama pipe sama seperti selector cuman ini lebih ke nama (camelCase)
})
export class TruncatePipe implements PipeTransform {
    public transform(value: string, limit_number?: number): any {
        if (limit_number === undefined) {
            return value;
        }

        return value.slice(0, limit_number);
    }
}
