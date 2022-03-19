import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { Navbar } from './navbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        Navbar,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        Navbar,
    ]
})
export class UbudElementCommonNavbarComponentModule {}