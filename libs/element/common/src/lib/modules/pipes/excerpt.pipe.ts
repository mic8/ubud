import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'excerpt'
})

export class ExcerptPipe implements PipeTransform {
    public transform(value: string, leng = 100): any {
        if(value.length <= leng)
            return value;

        return `${value.slice(0,leng)}...`
    }
}