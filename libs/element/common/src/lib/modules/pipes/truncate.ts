import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate_100',
})

export class TruncatePipe implements PipeTransform {
    public transform(value: string): any{
        return value = (value.length > 100) ? value.substr(0,99)+'...' : value;
    }
}