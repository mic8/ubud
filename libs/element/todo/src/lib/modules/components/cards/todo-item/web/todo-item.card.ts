import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoItemCardBase } from '../todo-item.card.base';

@Component({
    selector: 'ubud-element-todo-item-card-web',
    templateUrl: './todo-item.card.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemCard extends TodoItemCardBase {
}
