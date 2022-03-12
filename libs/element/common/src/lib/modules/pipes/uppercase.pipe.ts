import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'uppercase', // nama pipe sama seperti selector cuman ini lebih ke nama (camelCase)
})
export class UppercasePipe implements PipeTransform {
    public transform(value: string, index?: number): any {
        if (index === undefined) {
            return value.toUpperCase(); // lorem -> LOREM
        }
        
        const data = value.split(' ');
        let concat = '';
        data.forEach((item, i) => {
            if (index !== i) {
                concat += item + ' ';
            }
        });
        
        return data[index].toUpperCase() + ' ' + concat;
    }
}
