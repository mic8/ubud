import { NgModule } from '@angular/core';
import { TodoItemCard } from './todo-item.card';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [TodoItemCard],
    imports: [
        CommonModule,
    ],
    exports: [TodoItemCard],
})
export class UbudElementTodoItemCardComponentWebModule {
}
