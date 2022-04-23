import { NgModule } from '@angular/core';
import { UbudElementAlumniGraduateFormModule } from './graduate-form/module';

const MODULES: any[] = [
    UbudElementAlumniGraduateFormModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class UbudElementAlumniFormsModule {
}
