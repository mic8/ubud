import { NgModule } from '@angular/core';
import { UbudElementAlumniGraduateFormWebModule } from './web/module';

const MODULES: any[] = [
    UbudElementAlumniGraduateFormWebModule,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class UbudElementAlumniGraduateFormModule {
}
