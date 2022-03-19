import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ // declare variablenya -> var a: ShadowCard;
        NavbarComponent,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
        FontAwesomeModule
    ],
    exports: [
        NavbarComponent, // reassign (mengisi variable) -> var a: ShadowCard = new ShadowCard();
    ],
})
export class Navbar {}
