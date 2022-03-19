import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([ // parent 3
            {
                path: '', // mengacu ke module index home
                loadChildren: () => import('./index/home-index.module').then(m => m.HomeIndexPageModule),
            },
        ]),
    ],
})
export class HomeAppModule {
}
