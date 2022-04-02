import { NgModule } from '@angular/core';
import { AppTemplate } from './app.template';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppTemplate],
    imports: [
        RouterModule.forChild([ // parent 2
            {
                path: '',
                component: AppTemplate,
                children: [
                    {
                        path: '', // halaman utama / -> diarahkan ke halaman home / module home
                        loadChildren: () => import('../../modules/dashboard/pages/dashboard-app.module').then(m => m.DashboardAppModule),
                    },
                ],
            },
        ]),
    ],
    exports: [
        AppTemplate
    ]
})
export class AppTemplateModule {
}
