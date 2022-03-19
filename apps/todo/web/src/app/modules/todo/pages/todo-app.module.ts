import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([ // parent 4
            {
                path: '',
                loadChildren: () => import('./index/todo-index.module').then(m => m.TodoIndexPageModule),
            },
        ]),
    ],
})
export class TodoAppModule {
}
