import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UbudElementCommonShadowCardComponentModule } from '@ubud/element/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoStore } from '@ubud/domain/todo';
import { todoReducer } from 'libs/domain/todo/src/lib/stores/todo.reducer';

@NgModule({
    declarations: [AppComponent], // reference -> disimpan sebagai memory di aplikasi
    imports: [
        BrowserModule,
        StoreModule.forFeature('data' , todoReducer),
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictActionImmutability: false, // untuk action (command, event dll) kita gaa strict
                    strictStateImmutability: false, // state nya kita gaa strict
                },
            },
        ),
        EffectsModule.forRoot(),
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
