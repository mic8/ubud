import { NgModule } from '@angular/core';
import { UbudElementTodoItemCardComponentIonicModule } from './ionic/module';
import { UbudElementTodoItemCardComponentWebModule } from './web/module';

const MODULES: any[] = [
    UbudElementTodoItemCardComponentIonicModule,
    UbudElementTodoItemCardComponentWebModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class UbudElementTodoItemCardComponentModule {}
