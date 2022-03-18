import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'limitator'
})
export class LimitatorPipe implements PipeTransform {
    public transform(value: string, len = 100): any {
        if(value.length <= len) return value;

        return value.slice(0, len) + "...";
    }
}