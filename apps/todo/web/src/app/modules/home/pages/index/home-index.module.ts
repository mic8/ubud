import { NgModule } from '@angular/core';
import { HomeIndexPage } from './home-index.page';
import { RouterModule } from '@angular/router';
import { TodoTitleDirectiveModule } from '../../../todo/directives/todo-title/todo-title.module';

@NgModule({
    declarations: [HomeIndexPage],
    imports: [
        TodoTitleDirectiveModule,
        
        RouterModule.forChild([
            {
                path: '',
                component: HomeIndexPage,
            },
        ]),
    ]
})
export class HomeIndexPageModule {
}
