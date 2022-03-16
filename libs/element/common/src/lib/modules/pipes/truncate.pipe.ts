import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate_100',
})

export class TruncatePipe implements PipeTransform {
    public transform(value: string): any{
        if(value.length > 100){
            return value.substr(0,99)+ '...';
        }
        
        return value;
    }
}