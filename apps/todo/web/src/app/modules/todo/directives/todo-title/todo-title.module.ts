import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTitleDirective } from './todo-title.directive';

@NgModule({
    declarations: [TodoTitleDirective],
    imports: [
        CommonModule,
    ],
    exports: [TodoTitleDirective],
})
export class TodoTitleDirectiveModule {
}
