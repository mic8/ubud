import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UbudElementCommonPipeModule, UbudElementCommonShadowCardComponentModule, UbudElementCommonNavigationBarComponentModule, UbudElementCommonSideBarComponentModule } from '@ubud/element/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                },
            },
        ),
        EffectsModule.forRoot([]),

        RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
        
        UbudElementCommonShadowCardComponentModule,
        UbudElementCommonPipeModule,
        UbudElementCommonNavigationBarComponentModule,
        UbudElementCommonSideBarComponentModule,
        FontAwesomeModule,
        BrowserAnimationsModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'id',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
