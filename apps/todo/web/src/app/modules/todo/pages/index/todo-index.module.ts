import { NgModule } from '@angular/core';
import { TodoIndexPage, TodoIndexTitleDirective } from './todo-index.page';
import { RouterModule } from '@angular/router';
import { TodoListContainerModule } from '../../containers/todo-list/todo-list.module';

@NgModule({
    declarations: [TodoIndexPage, TodoIndexTitleDirective],
    imports: [
        TodoListContainerModule,
        
        RouterModule.forChild([
            {
                path: '',
                component: TodoIndexPage,
            },
        ]),
    ],
})
export class TodoIndexPageModule {
}
