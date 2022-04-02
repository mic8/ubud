import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
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
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => import('./templates/app/app.template.module').then(m => m.AppTemplateModule),
            },
        ], { initialNavigation: 'enabledBlocking' }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
