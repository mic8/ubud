import { NgModule } from '@angular/core';
import { TodoListContainer } from './todo-list.container';
import { CommonModule } from '@angular/common';
import { UbudElementTodoItemCardComponentWebModule } from '@ubud/element/todo';

@NgModule({
    declarations: [TodoListContainer],
    imports: [
        CommonModule,
        
        UbudElementTodoItemCardComponentWebModule,
    ],
    exports: [TodoListContainer], // artinya semua yang menggunakan / import module ini akan dapat menggunakan componentnya / containernya
})
export class TodoListContainerModule {
}
