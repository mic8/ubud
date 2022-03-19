import { NgModule } from '@angular/core';
import { UbudElementTodoItemCardComponentModule } from './todo-item/module';

const MODULES: any[] = [
    UbudElementTodoItemCardComponentModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class UbudElementTodoCardComponentModule {}
