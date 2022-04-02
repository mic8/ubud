import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardIndexPage } from './dashboard-index.page';
import { UbudInteractionAlumniGraduateModule } from '@ubud/interaction/alumni';

@NgModule({
    declarations: [DashboardIndexPage],
    imports: [
        CommonModule,
        
        UbudInteractionAlumniGraduateModule,
        
        RouterModule.forChild([
            {
                path: '',
                component: DashboardIndexPage,
            },
        ]),
    ],
})
export class DashboardIndexPageModule {
}
