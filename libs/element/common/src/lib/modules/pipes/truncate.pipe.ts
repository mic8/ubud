import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limiter',
})

export class TruncatePipe implements PipeTransform {
    public transform(value: string): any{
        if(value.length > 5){
            return value.substr(0,5)+ '...';
        }

        return value;
    }
}