import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                loadChildren: () => import('./index/dashboard-index.module').then(m => m.DashboardIndexPageModule),
            },
            {
                path: 'create',
                loadChildren: () => import('./create/dashboard-create.module').then(m => m.DashboardCreatePageModule),
            },
        ]),
    ]
})
export class DashboardAppModule {
}
