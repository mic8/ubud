import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar';

@NgModule({
    declarations: [ // declare variablenya -> var a: ShadowCard;
        Sidebar,
    ],
    imports: [
        CommonModule, // pipe, directive, (mengambil variabel yang didaftarkan)
    ],
    exports: [
        Sidebar, // reassign (mengisi variable) -> var a: ShadowCard = new ShadowCard();
    ],
})
export class SidebarComponent {}
