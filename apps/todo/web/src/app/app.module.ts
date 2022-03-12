import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UbudElementCommonShadowCardComponentModule } from '@ubud/element/common';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
        
        UbudElementCommonShadowCardComponentModule, // mau dipakai (baru diimport)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
