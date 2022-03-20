import { Component, Input } from '@angular/core';

@Component({
    template: ``,
})
export class TodoItemCardBase {
    @Input() public title!: string;
}
