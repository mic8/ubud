import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar';

@NgModule({
    declarations: [ // declare variablenya -> var a: Navbar;
        Navbar,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        Navbar, // reassign (mengisi variable) -> var a: Navbar = new Navbar();
    ],
})
export class UbudElementCommonNavbarComponentModule {}
