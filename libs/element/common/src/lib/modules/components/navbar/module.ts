import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar';

@NgModule({
    declarations: [ // declare variablenya -> var a: ShadowCard;
        Navbar,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        Navbar, // reassign (mengisi variable) -> var a: ShadowCard = new ShadowCard();
    ],
})
export class NavbarComponent {}
