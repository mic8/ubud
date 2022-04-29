import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexPages } from './home-index.page';
import { RouterModule } from '@angular/router';
import { UbudInteractionTodoModule } from 'libs/interaction/todo/src';

@NgModule({
    declarations: [HomeIndexPages],
    imports: [
        CommonModule,
        UbudInteractionTodoModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeIndexPages,
            },
        ]),
    ]
})
export class HomeIndexPageModule {
}
