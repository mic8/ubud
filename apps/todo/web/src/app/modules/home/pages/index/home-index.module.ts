import { NgModule } from '@angular/core';
import { HomeIndexPage } from './home-index.page';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HomeIndexPage],
    imports: [
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
