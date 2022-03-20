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
                        loadChildren: () => import('../../modules/home/pages/home-app.module').then(m => m.HomeAppModule),
                    },
                    {
                        path: 'todos',
                        loadChildren: () => import('../../modules/todo/pages/todo-app.module').then(m => m.TodoAppModule),
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
