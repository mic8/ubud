import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UbudElementCommonCardComponentModule, UbudElementCommonNavbarComponent, UbudElementCommonPipesComponentModule, UbudElementCommonSidebarComponentModule } from '@ubud/element/common';

@NgModule({
    declarations: [AppComponent],
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

        RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),

        UbudElementCommonNavbarComponent,
        UbudElementCommonSidebarComponentModule,
        UbudElementCommonCardComponentModule,
        UbudElementCommonPipesComponentModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'id',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
