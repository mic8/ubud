import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbudFormModule } from '@ubud/form';
import { GraduateForm } from './graduate.form';

@NgModule({
    declarations: [GraduateForm],
    imports: [
        CommonModule,
        UbudFormModule,
    ],
    exports: [GraduateForm],
})
export class UbudElementAlumniGraduateFormWebModule {
}
