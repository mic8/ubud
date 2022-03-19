import { NgModule } from '@angular/core';
import { UbudElementTodoCardComponentModule } from './cards/module';

const MODULES: any[] = [
    UbudElementTodoCardComponentModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class UbudElementTodoComponentsModule {
}
