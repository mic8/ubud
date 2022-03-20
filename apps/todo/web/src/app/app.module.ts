import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UbudElementCommonShadowCardComponentModule } from '@ubud/element/common';

@NgModule({
    declarations: [AppComponent], // reference -> disimpan sebagai memory di aplikasi
    imports: [
        BrowserModule,
        RouterModule.forRoot([ // parent 1
            {
                path: '',
                loadChildren: () => import('./templates/app/app.template.module').then(m => m.AppTemplateModule),
            },
        ], { initialNavigation: 'enabledBlocking' }),
        
        UbudElementCommonShadowCardComponentModule, // mau dipakai (baru diimport)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
