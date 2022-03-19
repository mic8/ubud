import { NgModule } from '@angular/core';
import { TodoIndexPage } from './todo-index.page';
import { RouterModule } from '@angular/router';
import { TodoListContainerModule } from '../../containers/todo-list/todo-list.module';
import { TodoTitleDirectiveModule } from '../../directives/todo-title/todo-title.module';

@NgModule({
    declarations: [TodoIndexPage],
    imports: [
        TodoListContainerModule,
        TodoTitleDirectiveModule,
        
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
