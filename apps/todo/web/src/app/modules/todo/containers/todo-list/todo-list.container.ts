import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ubud-todo-list-container',
    templateUrl: './todo-list.container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListContainer {
    
}
