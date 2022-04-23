import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbudElementAlumniGraduateFormWebModule } from '@ubud/element/alumni';
import { DashboardCreatePage } from './dashboard-create.page';
import { RouterModule } from '@angular/router';
import { UbudInteractionAlumniGraduateModule } from '@ubud/interaction/alumni';

@NgModule({
    declarations: [DashboardCreatePage],
    imports: [
        CommonModule,
        
        UbudElementAlumniGraduateFormWebModule,

        UbudInteractionAlumniGraduateModule,
        
        RouterModule.forChild([
            {
                path: '',
                component: DashboardCreatePage,
            },
        ]),
    ],
})
export class DashboardCreatePageModule {
}
