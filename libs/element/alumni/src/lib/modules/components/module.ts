import { NgModule } from '@angular/core';
import { UbudElementAlumniFormsModule } from './forms/module';

const MODULES: any[] = [
    UbudElementAlumniFormsModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class UbudElementAlumniComponentsModule {
}
